import { useMemo, useState } from "react";


const generateLargeArray = ()=>{
     console.log("Generating Large Array");

    const largeArray = [];

    for(let i=0;i<1000000;i++){
        largeArray.push(i);
    }

    return largeArray;

}

const sumArray = (arr)=>{
         console.log("Doing sum of Large Array");

    return arr.reduce((acc,curr)=>{
        return acc+curr;
    },0);
}


function CountPage(){
    const [count, setCount] = useState(0);

    const largeArray = useMemo(()=>generateLargeArray(),
    []);


    const sum = useMemo(()=>sumArray(largeArray),
    [largeArray]);

    return <div>

        <p> Count : {count} </p>

        <button onClick={()=>setCount(count+1)} > Increment </button>

        <h1> Sum : {sum} </h1>

    </div>


}

export default CountPage;