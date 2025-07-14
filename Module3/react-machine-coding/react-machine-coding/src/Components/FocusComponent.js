import { useRef } from "react";


function FocusComponent(){

    console.log("Inside a Focus Component");

    const inputRef = useRef(null);

    const focusInput = ()=>{

        console.log(inputRef.current);

        inputRef.current.focus();
    }


    return <div>

        <input ref={inputRef} type="text"/>

        <button onClick={focusInput}> Focus Input </button>

    </div>
}

export default FocusComponent;



//references


//useRef 






// Creating a Reference: You can create a reference using useRef(initialValue). This returns a mutable object with a current property, which is initialized to the passed initialValue.



// referenceVarible.current