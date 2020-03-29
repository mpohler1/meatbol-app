import React, {Component} from 'react';
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import 'bootstrap/dist/css/bootstrap.css';

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
                        {/*<button className="btn btn-primary"*/}
                        {/*        onClick={this.props.onInterpretButton}>Interpret</button>*/}
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
