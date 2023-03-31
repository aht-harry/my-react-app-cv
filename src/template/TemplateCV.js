import React from "react";
import MainLeft from "./components_template/MainCV/MainLeft";
import Top from "./components_template/Top";
import { Container, Row, Col } from "react-bootstrap";
import MainRight from "./components_template/MainCV/MainRight";

function TemplateCV() {
  return (
    <div className="cv-content">
      <Container>
        <Top />
        <div className="cv-main">
          <Row>
            <Col md={4} className="main-col-left">
              <Container>
                <Row>
                  <MainLeft />
                </Row>
              </Container>
            </Col>
            <Col md={8} className="main-col-right">
              <Container>
                <Row>
                  <MainRight />
                </Row>
              </Container>
            </Col>
          </Row>
          <div id="anh_bg_5"></div>
          <div id="anh_bg_6"></div>
          <div id="anh_bg_7"></div>
        </div>
      </Container>
    </div>
  );
}

export default TemplateCV;
