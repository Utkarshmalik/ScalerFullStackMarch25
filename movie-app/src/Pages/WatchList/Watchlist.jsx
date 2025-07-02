import { useState } from "react";
import genreIdMappings from "../../configurations/genreConfigs";



function WatchList({watchList, removeMovieFromWatchList}){

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

    console.log(genreArray);


    return <div>

       <div className="flex justify-center ">
        {
            genreArray.map((genre)=>{
                return <div className="h-[3rem] w-[9rem] bg-blue-400 mx-4 text-white flex justify-center items-center
                font-bolder text-lg rounded-xl " > {genre} </div>
            })
        }

       </div>

       <div className="flex justify-center m-8">
        <input onChange={onMovieFilter} className="h-[3rem] w-[20rem] p-3 rounded-xl font-lg font-bolder border" type="text" placeholder="Search Movie" />
       </div>

       <div>

        <table className="border w-full">

            <thead>

                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Popularity</th>
                    <th>Genre</th>

                </tr>
            </thead>

            <tbody>

                {
                    watchListMoviesInDisplay.map((movie)=>{

                        return <tr className="border m-2 font-bold">

                            <td className="flex items-center text-center px-10 gap-10 font-lg">
                                <img
                                className="h-[12rem] w-[20rem] p-2"
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />

                                {movie.title}
                            </td>

                            <td >
                                {movie.vote_average}
                            </td>

                            <td>
                                {movie.popularity}
                            </td>
                            <td>
                                {genreIdMappings[movie.genre_ids[0]]}
                            </td>
                            <td>
                                <span onClick={()=>removeMovieFromWatchList(movie)}
                                  className="font-medium text-red-500 cursor-pointer"> Delete </span>
                            </td>

                        </tr>

                    })


                }



            </tbody>


        </table>    



       </div>

    </div>

}

export default WatchList;