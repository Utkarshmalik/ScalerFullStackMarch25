import { axiosInstance } from "./axiosInstance";



export const createBooking = async (data)=>{

       try{
            const response = await axiosInstance.post("http://localhost:8080/bookings", data);
            return response.data;
            
        }
        catch(err){
            console.log(err);
            return err.response.data;
        }
}


export const makePayment = async (data)=>{

       try{
            const response = await axiosInstance.post("http://localhost:8080/payments", data);
            return response.data;
            
        }
        catch(err){
            console.log(err);
            return err.response.data;
        }
}
