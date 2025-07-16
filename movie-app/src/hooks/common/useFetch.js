import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{


        const fetchData = async ()=>{

          try{
            const response = await axios.get(url);
            console.log(response);

           setData(response);
           setLoading(false);

        }catch(err){
            setLoading(false);
            setError("Something went wrong");
        }
    }

    fetchData();
    
    } ,[]);


    return {data, error, loading};

}

export default useFetch;





// A Higher Order Component is a function that takes a component and returns a new component.
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
