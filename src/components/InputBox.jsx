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
                    // this.performShiftTab(input, start, end);
                }
                else if (event.target.selectionEnd - event.target.selectionStart > 1) {
                    this.performSelectionTab(event);
                } else {
                    this.performSingleTab(event);
                }
                break;

            case 16:
                this.props.setShiftHeld(true);
                break;

            default:
                break;
        }
    }

    handleKeyUp(event) {
        if (event.keyCode === 16) {
            this.props.setShiftHeld(false);
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
                <textarea className="form-control text-monospace overflow-auto"
                          id={"inputBoxTextArea" /* needs to be stored in state if multiple of these */}
                          rows="32"
                          cols="80"
                          value={this.props.input}
                          onKeyDown={(event) => this.handleKeyDown(event)}
                          onKeyUp={(event) => this.handleKeyUp(event)}
                          onChange={(event) => this.handleInputTextChange(event)}>
                </textarea>
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
        const blockStart = this.alignSelectionToStartOfLine(input, selectionStart);
        const blockEnd = selectionEnd;
        const originalBlock = input.substring(blockStart, blockEnd);

        // create a new block with \t at the start of any line within it
        const block = this.addTabsToEveryLineInBlock(originalBlock);

        // set start and end to appropriate values for cursor
        selectionStart += (block.length - originalBlock.length) / this.countNumberOfLinesInBlock(block);
        selectionEnd += block.length - originalBlock.length;

        // make the input with the modified block and save it to state
        input = input.substring(0, blockStart) + block + input.substring(blockEnd, input.length);

        this.props.inputTextChange(
            input,
            selectionStart,
            selectionEnd
        );
    }

    alignSelectionToStartOfLine(input, selectionStart) {
        while(selectionStart > 0 && input[selectionStart] !== "\n") {
            selectionStart--;
        }

        return selectionStart;
    }

    addTabsToEveryLineInBlock(block) {
        let lines = block.split("\n");
        for (let i = 0; i < lines.length; i++) {
            lines[i] = "\t" + lines[i];
        }
        return lines.join("\n");
    }

    countNumberOfLinesInBlock(block) {
        let lines = block.split("\n");
        return lines.length;
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
