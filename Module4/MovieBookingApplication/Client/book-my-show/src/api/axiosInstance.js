import axios from 'axios';


export const axiosInstance = axios.create({
    'Content-Type':'application/json'
})



//CROSS ORIGIN RESOURCE SHARING 



// http://localhost:3000/register


// http://localhost:8080/users/register