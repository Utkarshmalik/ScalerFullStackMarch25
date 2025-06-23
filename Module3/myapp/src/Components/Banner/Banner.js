import { useState } from "react";


function Banner(props){



    return <div style={{margin:"10px auto",fontSize:"20px",color:"black"}}>
        Highlighed User : {props.highLightedUser}
    </div>


}

export default Banner;