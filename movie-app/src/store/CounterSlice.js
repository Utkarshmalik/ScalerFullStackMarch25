import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(prevState)=>{
            prevState.value+=1;
        },
        decrement:(prevState)=>{
            prevState.value-=1;
        },
        incrementBy5:(prevState)=>{
            prevState.value+=5;
        },
    }
})

const counterReducer = counterSlice.reducer;
const {increment, decrement, incrementBy5} = counterSlice.actions;

export {increment,decrement, incrementBy5};


export default counterReducer;