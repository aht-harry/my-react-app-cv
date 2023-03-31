import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const LoginSignUp = () => {
  const [key, setKey] = useState("tab1");

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
                <Nav.Link eventKey="tab1">Đăng nhập</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2">Đăng ký</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <MDBContainer className="my-5">
                  <MDBCard>
                    <MDBCardBody className="d-flex flex-column">
                      <h2
                        className="fw-normal my-4 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Đăng nhập
                      </h2>

                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Địa chỉ email"
                        id="formControlLg"
                        type="email"
                        size="lg"
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Mật khẩu"
                        id="formControlLg"
                        type="password"
                        size="lg"
                      />
                      <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                        Đăng nhập
                      </MDBBtn>
                      <a className="small text-muted" href="#!">
                        Quên mật khẩu?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Bạn không có tài khoản?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Đăng ký ngay
                        </a>
                      </p>

                      <div className="d-flex flex-row justify-content-center">
                        <a href="#!" className="small text-muted me-1">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <MDBContainer className="my-5">
                  <MDBCard>
                    <MDBCardBody className="d-flex flex-column">
                      <h2
                        className="fw-normal my-4 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Đăng ký
                      </h2>

                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Địa chỉ email"
                        id="formControlLg"
                        type="email"
                        size="lg"
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Mật khẩu"
                        id="formControlLg"
                        type="password"
                        size="lg"
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Nhập lại mật khẩu"
                        id="formControlLg"
                        type="password"
                        size="lg"
                      />

                      <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                        Đăng ký
                      </MDBBtn>
                      <a className="small text-muted" href="#!">
                        Quên mật khẩu?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Đã có tài khoản?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Đăng nhập ngay
                        </a>
                      </p>

                      <div className="d-flex flex-row justify-content-center">
                        <a href="#!" className="small text-muted me-1">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginSignUp;
