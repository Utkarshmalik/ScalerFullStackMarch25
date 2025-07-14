import { useRef, useState } from "react";

function StopWatch(){
    
    const [seconds, setSeconds] = useState(0);

    const intervalRef = useRef(null);


    const onStart=()=>{

        const intervalId= setInterval(()=>{
            setSeconds((seconds)=>seconds+1);
        },1000);

        intervalRef.current = intervalId;

    }

    const onStop=()=>{
        
        const intervalId = intervalRef.current;
        console.log(intervalId);
        clearInterval(intervalId);
    }

    const onReset = ()=>{
        setSeconds(0);
    }

    return <h2>
        <p> Seconds : {seconds} </p>

        <button onClick={onStart} >Start</button>     
        <button onClick={onStop} >Stop</button>
        <button onClick={onReset} >Reset</button>

    </h2>

}

export default StopWatch;
