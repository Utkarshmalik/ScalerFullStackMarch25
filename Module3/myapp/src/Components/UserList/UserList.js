import User from "../User/User";
import UsersData from "../../data/users.json";
import "./UserList.css";
import NavbarComp from "../Common/Navbar/Navbar";
import { use, useState } from "react";

function UserList(props){

    console.log("Inside UserList");

    console.log(UsersData);

    const users = UsersData.users;
    console.log(users);

    const [activeUsers,setActiveUsers]= useState(users); 

    const [searchValue, setSearchValue] = useState("");

      
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

        <NavbarComp/>

        <h1 className="userListHead">UserList</h1>

        <div className="search">

            <input value={searchValue} onChange={onSearchChange} type="text" placeholder="Search User" />


        </div>


        <div className="userList">

        {
            activeUsers.map((user)=>{
                return <User onUserDelete={onUserDelete} key={user.id} theme={props.theme} userData={user} />
            })
        }


        </div>


    </div>

}

export default UserList;