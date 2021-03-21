import React from 'react';
import { Card, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const Transport = (props) => {
    const {name, img} = props.transport;
    const history = useHistory();

    const activateLocation = (event) => {
        event.preventDefault();
     history.push('/destination');
        console.log('hello')};

    return (
        <div>
            <Col>
            <Card className="mb-3" style={{width:"15rem" , border:"1px solid lightgrey", padding:"20px" ,backgroundColor:"rgbA(255, 230, 230,0.5)"}}>
        <Card.Img  src={img} variant="top" alt="" style={{height:"25vh" }}/> 
        <Card.Body>
        <ListGroup className="list-group-flush" >
        <ListGroupItem style={{backgroundColor:"rgbA(255, 230, 230,0)"}}><h2>{name} </h2> </ListGroupItem>
        <ListGroupItem style={{backgroundColor:"rgbA(255, 230, 230,0)"}}>< Button variant="danger" onClick={activateLocation} > Set Location</ Button> </ListGroupItem>
        
        </ListGroup>
        </Card.Body>
        </Card>
            </Col>
        
         </div> 
    );
};

export default Transport; 