import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";
import { ThemeContext } from "../../App";



function Home(){

    const {theme} = useContext(ThemeContext);

    const backgroundColorClass = (theme==="light")?"bg-white":"bg-black";



    return <div className={backgroundColorClass} >

        <Banner/>
        <Movies />

    </div>

}

export default Home;