import {combineReducers} from "redux";

import countReducer from"./CountReducer";
import usersReducer from "./UsersReducer";

export default combineReducers({
    countReducer,
    usersReducer
});