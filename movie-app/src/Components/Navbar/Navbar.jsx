import { Link } from "react-router-dom";
import Logo from "../../assets/MovieLogo.png";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Navbar(){

    const {theme, toggleTheme} = useContext(ThemeContext);
    const backgroundColorClass = (theme==="light")?"bg-white":"bg-black";


    return <div className={`flex space-x-8 items-center  pl-12 py-4 ${backgroundColorClass}`}>

       <Link to="/">
       <img className="w-[80px]" src={Logo} />
       </Link>

       <Link className="text-3xl font-bold text-blue-500 "  to="/">
       Movies
       </Link>

       <Link  className="text-3xl font-bold text-blue-500 " to="/watchList">

       WatchList 
       </Link>

       <button className="text-white" onClick={toggleTheme} > Toggle Theme </button>

    </div>

}

export default Navbar;