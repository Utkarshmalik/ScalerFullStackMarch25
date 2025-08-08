import axios from 'axios';


export const axiosInstance = axios.create({
    headers:{
        'Content-Type':'application/json',
         'x-access-token':localStorage.getItem("accessToken")
    }
})







//CROSS ORIGIN RESOURCE SHARING 



// http://localhost:3000/register


// http://localhost:8080/users/register