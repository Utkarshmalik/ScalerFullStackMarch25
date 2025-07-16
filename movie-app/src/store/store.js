import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./TodoSlice";
import usersReducer from "./UsersSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer,
        users:usersReducer
    }
})

export default store;

