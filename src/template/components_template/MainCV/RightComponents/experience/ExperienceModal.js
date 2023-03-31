import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
function ExperienceModal(props) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newExperience = {
      id: 1,
      company: companyName,
      position: position,
      from: fromDate,
      to: toDate,
      description: description,
    };
    props.onSave(newExperience);
  };

  const handleClose = () => {
    setCompanyName("");
    setPosition("");
    setFromDate("");
    setToDate("");
    setDescription("");
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm kinh nghiệm làm việc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Tên công ty:</Form.Label>
                <Form.Control
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="position">
                <Form.Label>Vị trí làm việc:</Form.Label>
                <Form.Control
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="fromDate">
                <Form.Label>Từ ngày:</Form.Label>
                <Form.Control
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="toDate">
                <Form.Label>Đến ngày:</Form.Label>
                <Form.Control
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={12}>
              <Form.Group controlId="description">
                <Form.Label>Mô tả công việc:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <span>
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{ marginRight: "5px" }}
            />
            Bỏ qua
          </span>
        </Button>
        <Button variant="primary" onClick={handleSave}>
          <span>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ marginRight: "5px" }}
            />
            Cập nhật
          </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperienceModal;
