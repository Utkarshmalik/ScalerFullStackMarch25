import {useSelector, useDispatch} from "react-redux";
import { decrement, increment, incrementBy5 } from "../../store/CounterSlice";


function Counter(){

    const counterState = useSelector((state)=>state.counter);
    const counterValue = counterState.value;

    const dispatch = useDispatch();

    const onIncrementButtonClick=()=>{
        dispatch(increment());
    }

      const onDecrementButtonClick=()=>{
        dispatch(decrement());
    }

      const onIncrementBy5ButtonClick=()=>{

        dispatch(incrementBy5());

    }


    return <div>

        <h1 className="font-lg"> Counter : {counterValue}  </h1>

        <button onClick={onIncrementButtonClick} className="border m-2 p-2 bg-black text-white  bolder font-lg"> Increment </button>
        <button onClick={onDecrementButtonClick} className="border m-2 p-2 bg-black text-white bolder font-lg"> Decrement </button>
        <button onClick={onIncrementBy5ButtonClick} className="border m-2 p-2 bg-black text-white bolder font-lg"> Increment by 5 </button>


    </div>


}


export default Counter;
