import { combineReducers } from "redux";
import inputBoxReducer from "./inputBoxReducer";
import interpretButtonReducer from "./interpretButtonReducer";

export default combineReducers({inputBox: inputBoxReducer, interpretButton: interpretButtonReducer});
