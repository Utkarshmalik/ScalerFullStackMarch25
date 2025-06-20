import User from "../User/User";
import UsersData from "../../data/users.json";
import "./UserList.css";
import NavbarComp from "../Common/Navbar/Navbar";

function UserList(props){

    console.log(UsersData);

    const users = UsersData.users;
    console.log(users);

    return <div>

        <NavbarComp/>

        <h1 className="userListHead">UserList</h1>
        <div className="userList">

        {
            users.map((user)=>{
                return <User key={user.id} theme={props.theme} userData={user} />
            })
        }


        </div>


    </div>

}

export default UserList;