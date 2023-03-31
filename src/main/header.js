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
    <div className="bg-light">
    <Container className="mb-3">
      <Navbar expand="lg">
        <Link to="/" className="nav-link">
        <img
          src={logo} // Use the imported logo image as the source
          alt="My logo" // Add alt text for accessibility
          height="45" // Set the height of the logo
          className="d-inline-block align-top mr-5" // Add Bootstrap classes for styling
        />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cv" className="nav-link">
              Tạo CV
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
  );
};

export default Header;
