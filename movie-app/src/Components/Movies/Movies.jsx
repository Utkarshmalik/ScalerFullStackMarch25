import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";

function Movies(){

    const [moviesData, setMoviesData]  = useState(null);
    const [isLoading, setIsLoading]  = useState(true);

       const [pageNumber, setPageNumber] = useState(1);

    const next=()=>{
    setIsLoading(true);
        setPageNumber(pageNumber+1);
    }

    const prev=()=>{
    setIsLoading(true);
        if(pageNumber>1){
        setPageNumber(pageNumber-1);
        }
    }

    

    const fetchMoviesData = async ()=>{
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`);

            setIsLoading(false);
            setMoviesData(response.data.results);

        }catch(err){

        }
    }

    useEffect(()=>{
        fetchMoviesData();
    },[pageNumber])


    return <div className="m-10 font-bold text-xl">

        <h1 className="text-center"> Trending Movies </h1>

        <div>
            {
                (isLoading)?<Spinner/>: <div>

                    <div className="flex flex-wrap gap-8 m-10 justify-center">

                        {
                            moviesData.map((movieObj)=>{
                                return <MovieCard key={movieObj.id}  movieObj={movieObj}  />
                            })
                        }

                    </div>
                    



                    </div>
            }

        </div>

        <div>
            <Pagination pageNumber={pageNumber} onNext={next} onPrev={prev} />
        </div>

        </div>

}

export default Movies;