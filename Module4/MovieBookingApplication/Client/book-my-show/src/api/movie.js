import { axiosInstance } from "./axiosInstance";

export const FetchAllMovies = async ()=>{

    console.log(process.env);


    try{
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/movies`);
        return response.data;

    }
    catch(err){
        console.log(err);
    }

}


export const FetchMovieById = async (movieId)=>{

    try{
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/movies/${movieId}`);
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}