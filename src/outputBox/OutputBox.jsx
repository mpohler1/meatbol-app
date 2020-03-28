import React, {Component} from 'react';

class OutputBox extends Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor="outputBoxTextArea">Output</label>
                <textarea className="form-control text-monospace overflow-auto"
                          id="outputBoxTextArea"
                          rows="32"
                          cols="80"
                          value={this.props.output}
                          readOnly={true} >
                </textarea>
            </div>
        );
    }
}

export default OutputBox;
