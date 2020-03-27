import React, {Component} from 'react';
import InputBox from "./inputBox/InputBox";
import OutputBox from "./outputBox/OutputBox";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <InputBox/>
                    </div>
                    <div className="col">
                        <OutputBox/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
