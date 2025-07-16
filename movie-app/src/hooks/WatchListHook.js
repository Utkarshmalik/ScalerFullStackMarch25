import genreIdMappings from "../configurations/genreConfigs";
import { WatchListContext } from "../App";
import { useContext, useState } from "react";


 function useWatchListHook(){
    
 const {watchList, removeMovieFromWatchList} = useContext(WatchListContext);

    const genres = new Set();

    const [watchListMoviesInDisplay, setWatchListMoviesInDisplay]=useState([...watchList]);


    watchListMoviesInDisplay.forEach((movie)=>{

        genres.add(genreIdMappings[movie.genre_ids[0]]);

    })

    const genreArray = Array.from(genres);
    genreArray.unshift("All Genres");

    const onMovieFilter = (e)=>{

        const searchValue = e.target.value.toLowerCase();

        const moviesToDisplay = watchList.filter((movie)=>{
           return movie.title.toLowerCase().startsWith(searchValue);
        })

        setWatchListMoviesInDisplay(moviesToDisplay);
        
    }


    return {genreArray , onMovieFilter, watchListMoviesInDisplay}

}


export {useWatchListHook};