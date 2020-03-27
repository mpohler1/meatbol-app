import React, {Component} from 'react';

class OutputBox extends Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor="outputBoxTextArea">Output</label>
                <textarea readOnly={true} className="form-control text-monospace overflow-auto" id="outputBoxTextArea" rows="32" cols="80"></textarea>
            </div>
        );
    }
}

export default OutputBox;
