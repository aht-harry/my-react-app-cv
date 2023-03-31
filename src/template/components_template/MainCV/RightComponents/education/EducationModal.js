import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function EducationModal(props) {
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
          <Form.Group controlId="companyName">
            <Form.Label>Tên công ty:</Form.Label>
            <Form.Control
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="position">
            <Form.Label>Vị trí làm việc:</Form.Label>
            <Form.Control
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="fromDate">
            <Form.Label>Từ ngày:</Form.Label>
            <Form.Control
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="toDate">
            <Form.Label>Đến ngày:</Form.Label>
            <Form.Control
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Mô tả công việc:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EducationModal;
