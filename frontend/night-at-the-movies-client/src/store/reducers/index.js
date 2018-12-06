// state should look like
// {user:userObj}
import { combineReducers } from "redux";
import user from "./user";

const reducer = combineReducers({ user });

export default reducer;
