import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import transportsData from '../../data/data.json';
import Transport from '../Transport/Transport';

const HomePage = () => {
   
const [transports, setTransports] = useState([]);


useEffect (() => {
setTransports(transportsData)
}, [])


    return (
        <div>
            <div style={{height:'250px'}}>
            <NavBar></NavBar>
            </div>

            <div style={{ }}>
                <Container style={{ width: "75%"}}>
                    <Row sm={1} md={2} lg={4}  style={{ display: "flex"}}>
                        {
                            transports.map(transport => <Transport transport={transport} key={transport.id} ></Transport>)
                        }
                    </Row>
                </Container>
            </div>
         </div>
    );
};

export default HomePage;