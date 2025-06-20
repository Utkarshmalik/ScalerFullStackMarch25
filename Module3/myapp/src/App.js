import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList/UserList';
import NavbarComp from './Components/Common/Navbar/Navbar';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Counter from './Components/Counter/Counter';
import TodoList from './Components/TodoList/TodoList';

function App() {

  const theme = "dark";

  const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onLoginButtonClick=()=>{
         setIsLoggedIn(true);
     }


  return (
    <div>

      

      {
        (isLoggedIn) ? <UserList  theme={theme} /> :  <Login onLogin={onLoginButtonClick} />
      } 

    </div>
 
  );
}

export default App;



//What is a state : Any piece of data or control that can dynamically change your UI

