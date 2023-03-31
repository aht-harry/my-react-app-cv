import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const LoginSignUp = () => {
  
  const [key, setKey] = useState('tab1'); 

  return (
    <Container>
      <Row>
        <Col md="6">
          <img
            className="img-fluid"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt=""
          />
        </Col>
        <Col md="6">
          <Tab.Container activeKey={key} onSelect={setKey}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <p>Content of tab 1</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <p>Content of tab 2</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginSignUp;
