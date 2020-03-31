import React, {Component} from "react";
import {connect} from "react-redux";
import {inputTextChange, setMenuVisible} from "../actions/actions";
import {bubbleSortExampleText} from "../resources/bubbleSort";
import {binarySearchExampleText} from "../resources/binarySearch";

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

    handleExample(exampleText) {
        this.props.inputTextChange(
            exampleText,
            0,
            0
        );
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
                    Load An Example!
                </button>
                {
                    this.props.menuVisible &&
                    (
                        <div className="dropdown-menu show"
                             aria-labelledby="dropdownMenuButton">
                            <button className="btn dropdown-item"
                                    onClick={() => this.handleExample(bubbleSortExampleText)}>
                                Bubble Sort
                            </button>
                            <div className="dropdown-divider" />
                            <button className="btn dropdown-item"
                                    onClick={() => this.handleExample(binarySearchExampleText)}>
                                Binary Search
                            </button>
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

export default connect(mapStateToProps, {
    setMenuVisible,
    inputTextChange
})(ExamplesButton);
