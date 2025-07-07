import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTodo } from "../../store/TodoSlice";


function TodoList(){

    const todoState = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const todoItems = todoState.todos;

    const [textValue, setTextValue] = useState("");

    const onTodoAdd=()=>{
        dispatch(addToTodo(textValue));
    
    }


    return <div>

        <h1 className="font-lg"> Todo List </h1>

        <input value={textValue} onChange={(e)=>setTextValue(e.target.value)} className="m-4 p-5 border" placeholder="Add a new Task" />

        <button onClick={onTodoAdd} className="border text-white m-3 p-4"> Add Todo </button>

        <ul className="m-5">

            {todoItems.map((todo)=>{
                return <li className="bolder m-3 p-5"> {todo} </li>
            })}

        </ul>

    </div>



}

export default TodoList;