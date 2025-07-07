import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import WatchList from "./Pages/WatchList/Watchlist";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import Counter from "./Pages/Counter/Counter";
import TodoList from "./Pages/TodoList/TodoList";


export const ThemeContext = createContext();
export const WatchListContext = createContext();


function App() {

  const [theme, setTheme] = useState("light");

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

  const toggleTheme = ()=>{
    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }


  return (
    <>
    <ThemeContext.Provider value={{theme:theme, toggleTheme}} >
    <WatchListContext.Provider value={{watchList,addMovieToAWatchList,removeMovieFromWatchList}}>

    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={ <Home /> } />

      <Route path="/watchlist" element={ <WatchList /> } />

      <Route path="/counter" element={ <Counter /> } />

      <Route path="/todo" element={ <TodoList /> } />

    </Routes>
    
    </BrowserRouter>
    </WatchListContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
