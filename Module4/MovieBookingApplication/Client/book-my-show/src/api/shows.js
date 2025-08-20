import { axiosInstance } from "./axiosInstance";

export const GetShowsByMovieId = async (movieId, date)=>{

    try{
        const response = await axiosInstance.get(`http://localhost:8080/shows/movies/${movieId}?showDate=${date}`);
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}


export const GetShowDetails = async (showId)=>{

    try{
        const response = await axiosInstance.get(`http://localhost:8080/shows/${showId}`);
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}
