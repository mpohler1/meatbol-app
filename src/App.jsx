import React, {Component} from 'react';
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import 'bootstrap/dist/css/bootstrap.css';
import InterpretButton from "./components/InterpretButton";
import './App.css';

class App extends Component {

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
                        <InputBox />
                        <InterpretButton />
                    </div>
                    <div className="col-lg m-1">
                        <OutputBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
