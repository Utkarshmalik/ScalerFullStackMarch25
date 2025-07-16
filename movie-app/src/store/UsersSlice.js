import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";


//Define the Async Thunk for Fetching Users

export const fetchUsers = createAsyncThunk("users/fetchUsers",async ()=>{
    try{
        const response = await axios.get("https://dummjson.com/users");
        return response.data;

    }catch(error){
        throw new Error("Failed to fetch users");
    }

});


const usersSlice = createSlice({

    name:"user",
    initialState:{
        users:null,
        loading:null,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
        
    }


})


const usersReducer = usersSlice.reducer;

export default usersReducer;