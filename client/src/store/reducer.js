import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './slices/usersSlice';
const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer