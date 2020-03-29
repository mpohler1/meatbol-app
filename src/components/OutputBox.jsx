import React, {Component} from 'react';
import {connect} from "react-redux";

class OutputBox extends Component {

    componentDidUpdate= () => {

    };

    render() {
        return (
            <div className="form-group">
                <label htmlFor="outputBoxTextArea">Output</label>
                <textarea className="form-control text-monospace overflow-auto console"
                          id="outputBoxTextArea"
                          ref={output => this.props.output && output && output.focus()}
                          cols="80"
                          value={this.props.output}
                          readOnly={true}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        output: state.interpretButton.output
    }
};

export default connect(mapStateToProps)(OutputBox);
