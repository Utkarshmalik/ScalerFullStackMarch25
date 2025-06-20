import { useState } from "react";


function TodoList(){

    const [tasks, setTasks]  = useState([]);
    const [input, setInput] = useState("");


    const addTask=()=>{

        const newTasks = [...tasks, input];


        setTasks(newTasks);

        setInput("");

    }

    return <div style={{maxWidth:"400px",margin:"auto",textAlign:"center"}}>

            <h2> Todo List </h2>

            <input onChange={(e)=>{setInput(e.target.value)}} 
            value={input}
            style={{padding:"10px"}} type="text" placeholder="Enter Task..."/>

            <button onClick={addTask}  style={{padding:"10px"}}> Add Task </button>

            <ul> 

                {
                    tasks.map((task)=>{
                        return <h5> {task} </h5>
                    })
                }

            </ul>

        </div>


}

export default TodoList;