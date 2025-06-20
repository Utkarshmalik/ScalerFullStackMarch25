import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList/UserList';
import NavbarComp from './Components/Common/Navbar/Navbar';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Counter from './Components/Counter/Counter';

function App() {

  const theme = "dark";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const onLogin=()=>{
    setIsLoggedIn(true);
   }

   const onLogout=()=>{
    setIsLoggedIn(false);
   }

  return (
    <div>
{/* 
      <Button onClick={onLogin}>  Login </Button>
       <Button onClick={onLogout}>  Logout </Button>
 */}

      {
        (isLoggedIn) ? <UserList  theme={theme} /> :  <Login/>
      }

    </div>
 
  );
}

export default App;



//What is a state : Any piece of data or control that can dynamically change your UI

