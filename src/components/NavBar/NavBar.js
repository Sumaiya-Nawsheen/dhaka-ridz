import React, { useContext } from 'react';
import { Container,Navbar, Nav, Form, Button , NavItem } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import projectName from '../../images/Urban Riders.png'
const NavBar = () => {

    const { value, value2, value3 } = useContext(UserContext);
    const [registeredUser, setRegisteredUser] = value;
    const [loggedInUser, setLoggedInUser] = value2;
    const [facebookUser, setFacebookUser] = value3;
    
    const history = useHistory();
    const handleLogin = () => {
history.push('/login')
    }
    return (
        
            <Container >
            
  <Navbar>
  <Navbar.Brand> <img src={projectName} alt='' style={{width:'40%'}}/></Navbar.Brand>
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

      <Button onClick={handleLogin} style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary"> {registeredUser.name.length>0 ? `${registeredUser.name }` : loggedInUser.displayName>0 ? `${loggedInUser.displayName }` : facebookUser.displayName>0 ? `${facebookUser.displayName }` : 'Login' } </Button>
     
     

    </Form>
  </Navbar>
</Container>
       
    );
};

export default NavBar;