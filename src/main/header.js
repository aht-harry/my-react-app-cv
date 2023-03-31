import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import logo from './topcv-logo.webp';

const Header = () => {
  return (
    <Container fluid>
    <Navbar bg="light" expand="lg" className="py-3 border-bottom">
        <Navbar.Brand href="/" className="mr-0">
            <img src={logo} alt="TopCV Việt Nam" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/" className="text-uppercase font-weight-bold mr-3">Trang chủ</Nav.Link>
            <Nav.Link href="/jobs" className="text-uppercase font-weight-bold mr-3">Việc làm</Nav.Link>
            <Nav.Link href="/services" className="text-uppercase font-weight-bold mr-3">Dịch vụ</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/login" className="text-uppercase font-weight-bold mr-3">Liên hệ</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Container>
    
  );
};

export default Header;
