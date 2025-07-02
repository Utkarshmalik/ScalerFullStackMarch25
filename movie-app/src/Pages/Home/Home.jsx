import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";



function Home({addMovieToAWatchList,removeMovieFromWatchList,watchList }){


    return <div>

        <Banner/>
        <Movies watchList={watchList} addMovieToAWatchList={addMovieToAWatchList} removeMovieFromWatchList={removeMovieFromWatchList} />

    </div>

}

export default Home;