import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import WatchList from "./Pages/WatchList/Watchlist";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {

  const [watchList, setWatchList] = useState([]);

  const addMovieToAWatchList=(movie)=>{

  }

    const removeMovieFromWatchList=(movie)=>{

  }

  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={ <Home addMovieToAWatchList={addMovieToAWatchList} removeMovieFromWatchList={removeMovieFromWatchList} /> } />

      <Route path="/watchlist" element={ <WatchList/> } />


    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
