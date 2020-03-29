import {INPUT_TEXT_CHANGE, SET_SHIFT_HELD} from "./actionTypes";

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
