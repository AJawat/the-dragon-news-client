import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import QZone from '../pages/Shared/QZone/QZone';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='mt-5 '>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h3>Dragon News Home</h3>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                        
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;