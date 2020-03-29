import React, {Component} from "react";
import {connect} from "react-redux";
import {interpretError, interpretRequest, interpretSuccess} from "../actions/actions";
import {interpretText} from "../service/webServerService";

class InterpretButton extends Component {

    handleOnClick = (input) => {
        this.props.interpretRequest();
        return interpretText(input).then(([response, json]) => {
            if (response.status === 200) {
                this.props.interpretSuccess(json.text);
            } else {
                this.props.interpretError();
            }
        })
    };

    render() {
        return (
            <button className="btn btn-primary"
                    onClick={() => this.handleOnClick(this.props.input)}>
                Interpret
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {
        input: state.inputBox.input
    };
};

export default connect(mapStateToProps, {
    interpretRequest,
    interpretSuccess,
    interpretError
})(InterpretButton);
