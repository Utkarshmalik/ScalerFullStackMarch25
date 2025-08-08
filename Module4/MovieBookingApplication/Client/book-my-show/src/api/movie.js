import { axiosInstance } from "./axiosInstance";

export const FetchAllMovies = async ()=>{

    try{
        const response = await axiosInstance.get("http://localhost:8080/movies");
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}