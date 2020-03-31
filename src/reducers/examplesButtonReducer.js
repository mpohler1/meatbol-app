import {SET_MENU_VISIBLE} from "../actions/actionTypes";

function examplesButtonReducer(state = {}, action) {

    switch (action.type) {
        case SET_MENU_VISIBLE:
            return Object.assign({}, state, {
                menuVisible: action.payload.menuVisible
            });
        default:
            return state;
    }
}

export default examplesButtonReducer;
