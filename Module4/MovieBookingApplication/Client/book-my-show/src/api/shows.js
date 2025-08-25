import { axiosInstance } from "./axiosInstance";

export const GetShowsByMovieId = async (movieId, date)=>{

    try{
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/shows/movies/${movieId}?showDate=${date}`);
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}


export const GetShowDetails = async (showId)=>{

    try{
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/shows/${showId}`);
        return response.data;

    }
    catch(err){
        console.log(err);
        return err.response.data;
    }

}
