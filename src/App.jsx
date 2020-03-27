import React, {Component} from 'react';
import InputBox from "./inputBox/InputBox";
import OutputBox from "./outputBox/OutputBox";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    state = {
        input: "",
        output: ""
    };

    handleInputTextChange(event) {
        this.setState({ input: event.target.value});
    }

    handleInterpretButton() {
        // console.log(this.state.input)
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
