import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({

    name:"todos",
    initialState:{
        todos:[]
    },
    reducers:{
        addToTodo:(prevState,action)=>{
            prevState.todos.push(action.payload);
        }
    }

})

const todoReducer = todoSlice.reducer;

const {addToTodo} = todoSlice.actions;

export {addToTodo};


export default todoReducer
