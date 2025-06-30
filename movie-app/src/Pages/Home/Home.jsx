import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";



function Home({addMovieToAWatchList,removeMovieFromWatchList }){


    return <div>

        <Banner/>
        <Movies  addMovieToAWatchList={addMovieToAWatchList} removeMovieFromWatchList={removeMovieFromWatchList} />

    </div>

}

export default Home;