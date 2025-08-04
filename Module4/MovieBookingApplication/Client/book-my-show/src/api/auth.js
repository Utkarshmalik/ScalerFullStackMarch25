import { data } from "react-router-dom";
import { axiosInstance } from "./axiosInstance"


export const RegisterUser = async (data)=>{

    try{

        const response = await axiosInstance.post("http://localhost:8080/users/register", data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}

export const LoginUser = async (data)=>{

    try{

        const response = await axiosInstance.post("http://localhost:8080/users/login", data);
        return response.data;
        
    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}