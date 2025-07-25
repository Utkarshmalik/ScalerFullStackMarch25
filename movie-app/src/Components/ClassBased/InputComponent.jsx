import { useState } from "react";



function Input(){

    const [searchValue, setSeatchValue] = useState("");


    return <div>

        <input value={searchValue} onChange={()=>setSeatchValue(e.target.value)} />
 
    </div>

}
export default Input;
