import { useState } from "react";
import Button from "react-bootstrap/esm/Button";


function Counter(){

    const [count,setCount] = useState(0);

    const onDecrement = ()=>{
        setCount(count-1);
    }

    const onIncrement = ()=>{
        setCount(count+1);
    }

    return <div>

        <h2> Count : {count} </h2>

        <Button onClick={onDecrement}> Decrement </Button>

        <Button onClick={onIncrement} > Increment </Button>


    </div>


}

export default Counter;