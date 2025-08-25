import { data } from "react-router-dom";
import { axiosInstance } from "./axiosInstance"


export const RegisterUser = async (data)=>{


    try{

        const response = await axiosInstance.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}

export const LoginUser = async (data)=>{

    try{

        const response = await axiosInstance.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}


export const ForgetPasswordAPI = async (data)=>{

    try{
        
        const response = await axiosInstance.post(`${process.env.REACT_APP_BACKEND_URL}/users/forget`, data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}


export const ResetPasswordAPI = async (data)=>{

    try{
        
        const response = await axiosInstance.post(`${process.env.REACT_APP_BACKEND_URL}/users/reset`, data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}