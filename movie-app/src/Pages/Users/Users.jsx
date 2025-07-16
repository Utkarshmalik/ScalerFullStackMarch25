import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/UsersSlice";


function Users(){

    console.log("Users component getting rendered");

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])

    const usersState = useSelector((state)=>state.users);

    const {users,loading,error} = usersState;

    console.log(usersState);

    return <h2> 
        Users Component
    </h2>


}

export default Users;