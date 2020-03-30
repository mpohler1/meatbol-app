import {INTERPRET_ERROR, INTERPRET_REQUEST, INTERPRET_SUCCESS} from "../actions/actionTypes";

function interpretButtonReducer(state = {}, action) {
    switch(action.type) {
        case INTERPRET_REQUEST:
            return state;
        case INTERPRET_SUCCESS:
            return Object.assign({}, state, {
                output: action.payload.output
            });
        case INTERPRET_ERROR:
            return state;
        default:
            return state;
    }
}

export default interpretButtonReducer;
