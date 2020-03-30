import React, {Component} from "react";

class ExamplesButton extends Component {

    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-info dropdown-toggle" data-toggle="dropdown" >
                    Show Me An Example
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        Bubble Sort
                    </li>
                    <li>
                        Binary Search
                    </li>
                </ul>
            </div>
        );
    }
}

export default ExamplesButton;
