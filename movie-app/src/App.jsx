import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import WatchList from "./Pages/WatchList/Watchlist";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={ <Home/> } />

      <Route path="/watchlist" element={ <WatchList/> } />


    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
