import { combineReducers } from "redux";
import userReducer from "./userReducer";
import numberReducer from "./numberReducer";

export default combineReducers({ user: userReducer, number: numberReducer });
