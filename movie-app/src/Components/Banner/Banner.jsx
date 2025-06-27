import { useEffect, useState } from "react";
import PlaceholderImage from "../../assets/imagePlaceholder.png"
import axios from "axios";
import { getRandomValue } from "../../../../Module3.1/src/utils";


function Banner(){

        const [bannerImage, setBannerImage] = useState(PlaceholderImage);
        const [movieName, setMovieName] = useState("");


        const fetchMovieData=async ()=>{

            try{
              const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");

              const movies = response.data.results;

              console.log(movies);

              const requiredMovieIndex = getRandomValue(0,movies.length-1);

              const movie = movies[requiredMovieIndex];

              const bannerImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
              const movieTitle = movie.title;

              setBannerImage(bannerImage);
              setMovieName(movieTitle);

            }
            catch(err){

                console.log(err);

            }


        }

        useEffect(()=>{
            fetchMovieData();
        },[])


    return <div className="h-[75vh] border bg-cover bg-center flex items-end justify-center" 
    style={{backgroundImage:`url(${bannerImage})`}} >
        <div className=" font-3xl text-white">
            {movieName}
        </div>


    </div>
}

export default Banner;