import React, { useContext } from 'react';
import { Container,Navbar, Nav, Form, Button , NavItem } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import projectName from '../../images/Urban Riders.jpg'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


if (firebase.apps.length ===0 ){firebase.initializeApp(firebaseConfig);}
const NavBar = () => {

    const { value, value2, value3 } = useContext(UserContext);
    const [registeredUser, setRegisteredUser] = value;
    const [loggedInUser, setLoggedInUser] = value2;
    const [facebookUser, setFacebookUser] = value3;
    
    const history = useHistory();
    const handleLogin = () => {
history.push('/login')
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            password2 : '',
            photo: '',
            error: '',
            success: false
          }
          setLoggedInUser(signedOutUser);
          setRegisteredUser(signedOutUser);
          setFacebookUser(signedOutUser);
          history.push('/');
        }).catch(err => {
          // An error happened.
        });
      }
    
    return (
        
            <Container >
            
  <Navbar>
  <Navbar.Brand> <img src={projectName} alt='' style={{width:'75%'}}/></Navbar.Brand>
    <Nav className="mr-auto">
      </Nav>
    <Form inline>
        
    <NavItem  href="/">
                  <Nav.Link as={Link}  style={{color:'black'}} to="home">Home</Nav.Link>
                </NavItem>
      
                <NavItem  href="/">
                  <Nav.Link as={Link}  style={{color:'black'}}  to="destination"> Destination</Nav.Link>
                </NavItem>

                <NavItem  href="/">
                  <Nav.Link as={Link}  style={{color:'black'}}  to="blog" >Blog</Nav.Link>
                </NavItem>
                <NavItem  href="/">
                  <Nav.Link as={Link}  style={{color:'black'}}  to="contact">Contact</Nav.Link>
                </NavItem>
{
    loggedInUser.isSignedIn ? <Button onClick={handleSignOut} style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary">  {loggedInUser.name} </Button>
    : registeredUser.isSignedIn ? <Button onClick={handleSignOut} style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary">  {registeredUser.name} </Button>
    : facebookUser.isSignedIn ? <Button onClick={handleSignOut} style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary"> {facebookUser.name} </Button>
     : <Button onClick={handleLogin} style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary">  Login </Button>
}
      
     
     

    </Form>
  </Navbar>
</Container>
       
    );
};

export default NavBar;