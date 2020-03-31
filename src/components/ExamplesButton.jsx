import React, {Component} from "react";
import {connect} from "react-redux";
import {setMenuVisible} from "../actions/actions";

class ExamplesButton extends Component {

    handleButtonClick() {
        if (this.props.menuVisible === null) {
            this.props.setMenuVisible(true);
        } else {
            this.props.setMenuVisible(!this.props.menuVisible);
        }
    }

    handleOnBlur(event) {
        if (event && event.relatedTarget) {
            event.relatedTarget.click();
        }
        this.props.setMenuVisible(false);
    }

    render() {
        return (
            <div className="dropup">
                <button className="btn btn-info dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => this.handleButtonClick()}
                        onBlur={event => this.handleOnBlur(event)}>
                    Show Me An Example!
                </button>
                {
                    this.props.menuVisible &&
                    (
                        <div className="dropdown-menu show"
                             aria-labelledby="dropdownMenuButton">
                            <li className="dropdown-item"> Bubble Sort </li>
                            <li className="dropdown-item"> Binary Search </li>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuVisible: state.examplesButton.menuVisible
    };
};

export default connect(mapStateToProps, { setMenuVisible })(ExamplesButton);
