import {INPUT_TEXT_CHANGE, INTERPRET_ERROR, INTERPRET_REQUEST, INTERPRET_SUCCESS, SET_SHIFT_HELD} from "./actionTypes";

export const inputTextChange = (input, selectionStart, selectionEnd) => ({
    type: INPUT_TEXT_CHANGE,
    payload: {
        input: input,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
    }
});

export const setShiftHeld = (shiftHeld, selectionStart, selectionEnd) => {
    return ({
        type: SET_SHIFT_HELD,
        payload: {
            shiftHeld: shiftHeld,
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
        }
    });
};

export const interpretRequest = () => {
    return ({
        type: INTERPRET_REQUEST
    });
};

export const interpretSuccess = (output) => {
    return {
        type: INTERPRET_SUCCESS,
        payload: {
            output: output
        }
    }
};

export const interpretError = () => {
    return {
        type: INTERPRET_ERROR
    }
};
