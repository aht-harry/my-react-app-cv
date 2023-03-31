import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import logo from "./topcv-logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/a" className="nav-link">
              a
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
