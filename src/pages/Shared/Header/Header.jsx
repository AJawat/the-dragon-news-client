import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <Container>
                <div className='text-center mt-5'>
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism WithOut Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex mb-2'>
                    <Button variant="danger">Danger</Button>{' '}
                    <Marquee speed={100} className='ms-2 text-success '>
                        I can be a React component, multiple React components, or just some Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, totam sint suscipit quod sunt recusandae ea, vero eius aliquam est distinctio! Unde non inventore dolores at? Tempora quisquam a incidunt nulla error, repudiandae itaque, beatae laudantium odio magnam officia. Quis ullam quo eaque, delectus aspernatur asperiores corrupti hic atque odit!
                    </Marquee>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container className='bg-success bg-opacity-25 rounded'>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#features">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav className='d-flex align-items-center'>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button className='text-success fw-bold' variant="light">Login</Button>{' '}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;