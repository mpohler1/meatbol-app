import {INPUT_TEXT_CHANGE, SET_SHIFT_HELD} from "../actions/actionTypes";

function inputBoxReducer(state = {}, action) {
    switch (action.type) {
        case INPUT_TEXT_CHANGE:
            return Object.assign({}, state, {
                input: action.payload.input,
                selectionStart: action.payload.selectionStart,
                selectionEnd: action.payload.selectionEnd
            });
        case SET_SHIFT_HELD:
            return Object.assign({}, state, {
                shiftHeld: action.payload.shiftHeld,
                selectionStart: action.payload.selectionStart,
                selectionEnd: action.payload.selectionEnd
            });
        default:
            return state;
    }
}

export default inputBoxReducer;
