import User from "../User/User";
import UsersData from "../../data/users.json";
import "./UserList.css";
import NavbarComp from "../Common/Navbar/Navbar";
import { use, useEffect, useState } from "react";

var users = null;


function UserList(props){

        console.log("Inside UserList");

    console.log(UsersData);


    //make an API call to fetch a list of users 

    // const users = await fetch("https://dummyjson.com/users");

    const [activeUsers,setActiveUsers]= useState(null); 
    const [isLoading,setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");


        //ComponenDidMount + ComponentDidUpdate

    const fetchData = async ()=>{

        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        users = data.users;
        setActiveUsers(data.users);
        setIsLoading(false);
    } 

    useEffect(()=>{
        fetchData();
    
    },[]);

    useEffect(()=>{
        console.log("I am insie useEffect")
    })


      
    const onUserDelete = (id)=>{
        const filteredUsers = activeUsers.filter((user)=>{
            return user.id!=id;
        })

        setActiveUsers(filteredUsers);

    }

    const onSearchChange = (e)=>{
        setSearchValue(e.target.value);

        const searchValue = e.target.value.toLowerCase();

        const filteredUsers = users.filter((user)=>{
            //which user i want to find 
            const fullName = (user.firstName + " " + user.lastName).toLowerCase();
            return fullName.startsWith(searchValue);
        })

        console.log(filteredUsers);

    
        setActiveUsers(filteredUsers);

    }


    return <div>

        {
            (isLoading) ? <h1> Loading users .... </h1> : <div>

            <h1 className="userListHead">UserList</h1>

            <div className="search">

                <input value={searchValue} onChange={onSearchChange} type="text" placeholder="Search User" />


            </div>


            <div className="userList">

            {
                activeUsers.map((user)=>{
                    return <User onHighlightUser={props.onHighlightUser} onUserDelete={onUserDelete} key={user.id} theme={props.theme} userData={user} />
                })
            }


        </div>
                </div>
        }



    </div>

}

export default UserList;