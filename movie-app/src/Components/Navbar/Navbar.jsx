import { Link } from "react-router-dom";
import Logo from "../../assets/MovieLogo.png";

function Navbar(){

    return <div className="flex space-x-8 items-center bg-white pl-12 py-4 ">

       <Link to="/">
       <img className="w-[80px]" src={Logo} />
       </Link>

       <Link className="text-3xl font-bold text-blue-500 "  to="/">
       Movies
       </Link>

       <Link  className="text-3xl font-bold text-blue-500 " to="/watchList">

       WatchList 
       </Link>

    </div>

}

export default Navbar;