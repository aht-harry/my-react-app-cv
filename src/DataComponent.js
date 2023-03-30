import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 
const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
};

   
class DataComponent extends React.Component {
    render() {
        return (
            <Container>
              <h2>Personal Information</h2>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Container>
          );
    }
  }
 
  export default DataComponent;