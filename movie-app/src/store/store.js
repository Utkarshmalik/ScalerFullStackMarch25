import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./TodoSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer
    }
})

export default store;

