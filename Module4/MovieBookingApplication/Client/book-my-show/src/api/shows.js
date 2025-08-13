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
