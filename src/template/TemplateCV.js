import React from 'react';
import MainLeft from './components_template/MainCV/MainLeft';
import Top from './components_template/Top';
import { Container, Row, Col } from 'react-bootstrap';

function TemplateCV() {
  return (
    <div className="cv-content">
      <Top />
      <Container>
        <Row>
        <Col md={4}>
            <Container>
                <Row>
                    <MainLeft />
                </Row>
            </Container>
        </Col>
        <Col md={8}>
            <Container>
                <Row>
                    <MainLeft />
                </Row>
            </Container>
        </Col>
        </Row>
      </Container>
    </div>
  )
}


export default TemplateCV;
