import useFetch from "../../hooks/common/useFetch";
import Spinner from "../Common/Spinner/Spinner";
import MovieCard from "../MovieCard/MovieCard";


function MoviesComp(){

   const {data, error, loading } =  useFetch('https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=1');
      
        return <div>
            {
                (loading)?<Spinner/>: <div>
                    <div className="flex flex-wrap gap-8 m-10 justify-center">
                        {
                            data.data.results.map((movieObj)=>{
                                return <MovieCard key={movieObj.id}  movieObj={movieObj}  />
                            })
                        }
                    </div>
                    </div>
            }

        </div>

}

export default MoviesComp;