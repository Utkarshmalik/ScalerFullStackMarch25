import { useEffect } from "react";
import "./User.css";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import ListGroup from 'react-bootstrap/ListGroup';

function User(props){

    const userData = props.userData;
    const onHighlightUser = props.onHighlightUser;

    const {image, firstName, birthDate, email,age,lastName} = userData;
    const name = firstName + " " + lastName;


       useEffect(()=>{    
        //compoentWillMount
            return ()=>{
                console.log("Component about to me unmounted");
            }
    
        },[]);

  
   
    return  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>
    
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Age : {age}</ListGroup.Item>
        <ListGroup.Item> Email : {email}</ListGroup.Item>
        <ListGroup.Item>DOB : {birthDate} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Book User</Card.Link>
        <Card.Link href="#">Contact User</Card.Link>
      </Card.Body>
      <Button style={{margin:"2px auto"}} onClick={()=>props.onUserDelete(userData.id)} variant="danger"> Delete User </Button>
        <Button style={{margin:"2px auto"}}  onClick={()=>props.onHighlightUser(name)} variant="primary"> Highlight User </Button>

    </Card>

}

export default User;


//style : object containing key value pairs for CSS styles 

// {color:"red",backgroundColor:"pink",marinTop:"3px"}

//  style={{color:"red",backgroundColor:"black",margin:"5px",padding:"5px",
//     textAlign:"center"}} 