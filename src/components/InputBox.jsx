import React, {Component} from 'react';
import {connect} from "react-redux";
import {inputTextChange, setShiftHeld} from "../actions/actions";

class InputBox extends Component {

    handleInputTextChange(event) {
        this.props.inputTextChange(
            event.target.value,
            event.target.selectionStart,
            event.target.selectionEnd
        );
    }

    handleKeyDown(event) {
        switch (event.keyCode) {
            case 9:
                event.preventDefault();
                if (this.props.shiftHeld) {
                    this.performShiftTab(event);
                }
                else if (event.target.selectionEnd - event.target.selectionStart > 0) {
                    this.performSelectionTab(event);
                } else {
                    this.performSingleTab(event);
                }
                break;

            case 16:
                this.props.setShiftHeld(
                    true,
                    event.target.selectionStart,
                    event.target.selectionEnd
                );
                break;

            default:
                break;
        }
    }

    handleKeyUp(event) {
        if (event.keyCode === 16) {
            this.props.setShiftHeld(
                false,
                event.target.selectionStart,
                event.target.selectionEnd
            );
        }
    }

    componentDidUpdate = () => {
        // This is to determine the selection after selectionTab and shiftTab actions
        // JSX TextAreas do not have selectionStart and selectionEnd as properties
        let inputBoxTextArea = document.getElementById("inputBoxTextArea");
        inputBoxTextArea.setSelectionRange(this.props.selectionStart, this.props.selectionEnd);
    };

    render() {
        return (
            <div className="form-group">
                <label htmlFor="inputBoxTextArea">Meatbol Code</label>
                <textarea className="form-control text-monospace overflow-auto console"
                          id={"inputBoxTextArea" /* needs to be stored in state if multiple of these */}
                          cols="80"
                          wrap="off"
                          value={this.props.input}
                          onKeyDown={(event) => this.handleKeyDown(event)}
                          onKeyUp={(event) => this.handleKeyUp(event)}
                          onChange={(event) => this.handleInputTextChange(event)}/>
            </div>
        );
    }

    performSingleTab(event) {
        let input = event.target.value;
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;

        input = input.substring(0, selectionStart) + "\t" + input.substring(selectionEnd, input.length);
        this.props.inputTextChange(
            input,
            selectionStart+1,
            selectionEnd+1
        );
    }

    performSelectionTab(event) {
        let input = event.target.value;
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;

        // define the block and it's boundaries
        const blockStart = this.alignBlockStartToStartOfLine(input, selectionStart);
        const blockEnd = this.alignBlockEndToEndOfLine(input, selectionEnd);
        const originalBlock = input.substring(blockStart, blockEnd);

        // create a new block with \t at the start of any line within it
        const block = this.addTabsToEveryLineInBlock(originalBlock);

        // set start and end to appropriate values for cursor
        selectionStart += this.differenceInLengthBetweenFirstLineOfEachBlock(originalBlock, block);
        selectionEnd += block.length - originalBlock.length;
        selectionStart = selectionStart < 0 ? 0: selectionStart;
        selectionEnd = selectionEnd < 0 ? 0: selectionEnd;

        // make the input with the modified block and save it to state
        input = input.substring(0, blockStart) + block + input.substring(blockEnd, input.length);

        this.props.inputTextChange(
            input,
            selectionStart,
            selectionEnd
        );
    }

    performShiftTab(event) {
        let input = event.target.value;
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;

        // define the block and it's boundaries
        const blockStart = this.alignBlockStartToStartOfLine(input, selectionStart);
        const blockEnd = this.alignBlockEndToEndOfLine(input, selectionEnd);
        const originalBlock = input.substring(blockStart, blockEnd);

        // create a new block with \t removed from the start of any line within it
        const block = this.removeTabsFromEveryLineInBlock(originalBlock);

        // set start and end to appropriate values for cursor
        selectionStart -= this.differenceInLengthBetweenFirstLineOfEachBlock(originalBlock, block);
        selectionEnd += block.length - originalBlock.length;
        selectionStart = selectionStart < 0 ? 0: selectionStart;
        selectionEnd = selectionEnd < 0 ? 0: selectionEnd;

        // make the input with the modified block and save it to state
        input = input.substring(0, blockStart) + block + input.substring(blockEnd, input.length);

        this.props.inputTextChange(
            input,
            selectionStart,
            selectionEnd
        );
    }

    alignBlockStartToStartOfLine(input, selectionStart) {
        while(selectionStart > 0 && input[selectionStart-1] !== "\n") {
            selectionStart--;
        }

        return selectionStart;
    }

    alignBlockEndToEndOfLine(input, selectionEnd) {
        while(selectionEnd < input.length && input[selectionEnd] !== "\n") {
            selectionEnd++;
        }

        return selectionEnd;
    }

    addTabsToEveryLineInBlock(block) {
        let lines = block.split("\n");
        for (let i = 0; i < lines.length; i++) {
            lines[i] = "\t" + lines[i];
        }
        return lines.join("\n");
    }

    removeTabsFromEveryLineInBlock(block) {
        let lines = block.split("\n");
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith("\t") || lines[i].startsWith(" ")) {
                lines[i] = lines[i].substring(1, lines[i].length);
            }
        }
        return lines.join("\n");
    }

    differenceInLengthBetweenFirstLineOfEachBlock(firstBlock, secondBlock) {
        let firstLineOfFirstBlock = firstBlock.split("\n")[0];
        let firstLineOfSecondBlock = secondBlock.split("\n")[0];
        return Math.abs(firstLineOfFirstBlock.length - firstLineOfSecondBlock.length);
    }
}

const mapStateToProps = state => {
    return {
        input: state.inputBox.input,
        shiftHeld: state.inputBox.shiftHeld,
        selectionStart: state.inputBox.selectionStart,
        selectionEnd: state.inputBox.selectionEnd
    };
};

export default connect(mapStateToProps, {
    inputTextChange,
    setShiftHeld
})(InputBox);
