import React , { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Map from '../Map/Map';


const Destination = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleDetails = () => {
        console.log("hello")
    }

    
    return (
        <div>

            <div>
            <NavBar></NavBar>
            </div>
            
            <div>
            <Container>
  <Row>
    <Col lg={4} md={4} sm={4} style={{border:'1px solid black' , backgroundColor:'red' , marginTop: '20px', height:'400px' }}>
   
<Form style={{textAlign:"center", marginTop: '30px'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Pick From</Form.Label>
    <Form.Control type="text" placeholder="Starting location" required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Drop To</Form.Label>
    <Form.Control type="text" placeholder="Destination location" required />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group controlId="formBasicDate">
  <DatePicker selected={startDate} onChange={date => setStartDate(date)}  showTimeSelect
  dateFormat="Pp" />
  </Form.Group>
 <Button onClick= {handleDetails} variant="primary" >
    Search
  </Button>
</Form>
    </Col>


    <Col lg={7} md={6} sm={4} style={{  marginTop: '20px', height:'550px', marginLeft:'10px'}}>
    <Map/>
    {/* <img src={Map} style={{  height:'100%'}} alt=""></img> */}
        </Col>
        </Row>
        </Container>
        </div>
        </div>
    );
}

export default Destination;