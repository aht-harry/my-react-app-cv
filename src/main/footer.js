import React from "react";
import {
    Col,
  Container, Row,
} from "react-bootstrap";
import logo from "./topcv-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="py-3 mt-5 bg-light">
        <Row>
            <Col Col={6} >
                <p className="mb-0">© 2014 - 2023 Công ty cổ phần TopCV Việt Nam</p>
            </Col>
            <Col Col={6}>
                <p className="mb-0">© 2014 - 2023 Công ty cổ phần TopCV Việt Nam</p>
            </Col>
        </Row>
    </Container>
  );
};

export default Footer;
