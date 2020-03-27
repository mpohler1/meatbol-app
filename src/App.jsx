import React, {Component} from 'react';
import InputBox from "./inputBox/InputBox";
import OutputBox from "./outputBox/OutputBox";
import 'bootstrap/dist/css/bootstrap.css';
import WebServerService from "./service/WebServerService";

class App extends Component {

    state = {
        input: "",
        output: "",
        shiftHeld: false
    };

    handleInputTextChange(event) {
        this.setState({ input: event.target.value});
    }

    handleKeyDown(event) {
        switch (event.keyCode) {
            case 9:
                event.preventDefault();
                let input = event.target.value;
                let start = event.target.selectionStart;
                let end = event.target.selectionEnd;
                if (this.state.shiftHeld) {
                    this.performShiftTab(input, start, end);
                }
                 else {
                    this.performTab(input, start, end);
                }
                break;

            case 16:
                this.setState({shiftHeld: true});
                break;

            default:
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.keyCode) {
            case 16:
                this.setState({shiftHeld: false});
                break;

            default:
                break;
        }
    }

    handleInterpretButton() {
        WebServerService.interpretText(this.state.input, (output) => this.setState({output: output}))
    }

    performShiftTab(input, start, end) {
        // Align begining of selection to either start of text area or the start of a line
        while(start > 0 && input[start] !== "\n") {
            start--;
        }

        // remove \t at the start of any line within the selection
        let subInputArray = input.substring(start, end).split("\n");
        for (let i = 0; i < subInputArray.length; i++) {
            if (subInputArray[i].startsWith("\t")) {
                subInputArray[i] = subInputArray[i].substring(1, subInputArray[i].length);
            }
        }
        const subInput = subInputArray.join("\n");

        // make the input with the modified selection and save it to state
        input = input.substring(0, start) + subInput + input.substring(end, input.length);
        this.setState({input: input});
    }

    performTab(input, start, end) {
        if (end - start > 1) {

        } else {
            input = input.substring(0, start) + "\t" + input.substring(end, input.length);

            // callback corrects cursor position after standard tab
            this.setState({input: input}, () => {
                let textArea = document.getElementById("inputBoxTextArea");
                textArea.setSelectionRange(start+1, end+1);
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row m-1">
                    <div className="col-12 m-1">
                        <h1 className="h1" >Meatbol Interpreter</h1>
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col-lg m-1">
                        <InputBox input={this.state.input}
                                  onInputTextChange={(event) => this.handleInputTextChange(event)}
                                  onKeyDown={(event) => this.handleKeyDown(event)}
                                  onKeyUp={(event) => this.handleKeyUp(event)}
                                  onInterpretButton={() => this.handleInterpretButton()}/>
                    </div>
                    <div className="col-lg m-1">
                        <OutputBox output={this.state.output}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
