import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { FetchMovieById } from "../../api/movie";
import { Flex, Input } from "antd";


function MovieDetailsPage(){


    const [movie, setMovie] = useState(null);

    const [searchParams , setSearchParams] = useSearchParams();
    const [date, setDate] = useState(searchParams.get('date'));

    console.log(searchParams);
    const navigate = useNavigate();
    const params = useParams();
    const movieId = params.movieId;

    console.log(movie);


    useEffect(()=>{

        fetchMovieDetails();

    },[]);

    const fetchMovieDetails = async ()=>{

        const movieDetailsReponse =  await FetchMovieById(movieId);
        setMovie(movieDetailsReponse.data);

    }

    const handleDateChange = (e) => {

        setDate(e.target.value);
        navigate(`/movies/${movie._id}?date=${e.target.value}`);

    }



    return <div>

            <Navbar/>


              {
          movie==null && <div className="text-center" > <h2> Fetching Movie Details ....</h2> </div>       
            }


              {
               movie!=null && (

                <Flex className="mt-8 ms-3" align="center" gap="large" > 

                    <div>
                        <img src={movie.poster} width={300} />
                     </div>   

                     <div>

                        <h1> {movie.movieName} </h1>

                        <p> Language : {movie.language} </p>
                        <p> Genre : {movie.genre.join(", ")} </p>
                        <p> Release Date : {movie.releaseDate} </p>
                        <p> Duration : {movie.duration} </p>


                        <hr/>
                        

                        <div className="mt-3">

                            <label> Choose the date </label>

                            <Input onChange={handleDateChange} value={date} type="date" />

                        </div>


                     </div>   

                 </Flex>   


               )      
            }





    </div>
}

export default MovieDetailsPage;