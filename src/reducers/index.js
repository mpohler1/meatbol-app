import { combineReducers } from "redux";
import inputBoxReducer from "./inputBoxReducer";
import interpretButtonReducer from "./interpretButtonReducer";
import examplesButtonReducer from "./examplesButtonReducer";

export default combineReducers({
    inputBox: inputBoxReducer,
    interpretButton: interpretButtonReducer,
    examplesButton: examplesButtonReducer
});
