import { combineReducers } from "redux";
import fetchUser from "./fetchUsers"


const reducers = combineReducers({
    fetchUser
})

export default reducers

export type RootState = ReturnType<typeof reducers>