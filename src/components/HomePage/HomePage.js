import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Metro from '../../images/Group.png';
import Bus from '../../images/Frame-1.png';
import Car from '../../images/Frame-2.png';
import Bike from '../../images/Frame.png';


const HomePage = () => {
   
    return (
        <div>
            <div style={{height:'250px'}}>
            <NavBar></NavBar>
            </div>
           <div> 
           <Container>
              <Row>
                <Col>
                <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Bike}/>
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Bike</ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
</Col>
                <Col >
                <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Car} />
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Car</ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
                </Col>

                <Col>
                <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Bus} />
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Bus</ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
    </Col>

                <Col>
                <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Metro} />
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Train</ListGroupItem>
  </ListGroup>
  </Card.Body>
</Card>
                </Col>
              </Row>
            </Container>
           </div>
         </div>
    );
};

export default HomePage;