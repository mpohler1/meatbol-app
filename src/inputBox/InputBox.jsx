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
                              cols="80"
                              value={this.props.input}
                              onChange={this.props.onInputTextChange}>
                    </textarea>
                </div>
                <button className="btn btn-primary"
                        onClick={this.props.onInterpretButton}>Interpret</button>
            </React.Fragment>
        );
    }
}

export default InputBox;
