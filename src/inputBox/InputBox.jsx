import React, {Component} from 'react';

class InputBox extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="inputBoxTextArea">Meatbol Code</label>
                    <textarea className="form-control text-monospace overflow-auto"
                              id="inputBoxTextArea"
                              rows="32"
                              cols="80">

                    </textarea>
                </div>
                <button className="btn btn-primary">Interpret</button>
            </React.Fragment>
        );
    }
}

export default InputBox;
