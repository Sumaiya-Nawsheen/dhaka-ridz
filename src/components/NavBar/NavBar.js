import React from 'react';
import { Container,Navbar, Nav, Form, Button , NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectName from '../../images/Urban Riders.png'
const NavBar = () => {
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

      <Button style={{color:'black', backgroundColor:"yellowgreen"}} variant="outline-primary">Login</Button>
    </Form>
  </Navbar>
</Container>
       
    );
};

export default NavBar;