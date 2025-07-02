import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import WatchList from "./Pages/WatchList/Watchlist";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {

  const watchListItems = localStorage.getItem("watchList");

  const defaultWatchList = (watchListItems==null)?[]:JSON.parse(watchListItems);


  const [watchList, setWatchList] = useState(defaultWatchList);

  useEffect(()=>{
    updateWatchList();
  },[watchList])

  const updateWatchList = ()=>{
      const watchListItems = JSON.stringify(watchList);
      localStorage.setItem("watchList",watchListItems);
  }



  const addMovieToAWatchList=(movie)=>{
    console.log("Add to a watchlist", movie);

    setWatchList([...watchList, movie]);

  }

    const removeMovieFromWatchList=(movieToRemove)=>{

    console.log("Remove from watchlist", movieToRemove);

    const updatedWatchList = watchList.filter((movie)=>{
      return movie.id!==movieToRemove.id;
    })

    setWatchList(updatedWatchList);

  }

  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={ <Home watchList={watchList} addMovieToAWatchList={addMovieToAWatchList} removeMovieFromWatchList={removeMovieFromWatchList} /> } />

      <Route path="/watchlist" element={ <WatchList removeMovieFromWatchList={removeMovieFromWatchList} watchList={watchList} /> } />


    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
