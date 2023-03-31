import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
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
        <Modal.Title>Thêm mới học vấn bằng cấp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="education_form">
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>
                  Trường, trung tâm đào tạo:
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Khoa đào tạo: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên khoa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={12}>
              <Form.Group controlId="companyName">
                <Form.Label>
                  Tên bằng cấp chứng chỉ:
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="VD: Cử nhân luật, Kỹ sư CNTT, Chứng chỉ nghề điện dân dụng..."
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Chuyên ngành đào tạo:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="VD: Công nghệ thông tin, Kế toán..."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>
                  Xếp loại: <span className="required">*</span>
                </Form.Label>
                <select
                  className="select-dropdown select-dropdown-nomal valid"
                  name="skill_software[Ms Word]"
                  data-placeholder="Chọn"
                  aria-invalid="false"
                >
                  <option class="select-dropdown_item" value="">
                    Chọn xếp loại
                  </option>
                  <option class="select-dropdown_item" value="">
                    Yếu
                  </option>
                  <option class="select-dropdown_item" value="">
                    Trung bình
                  </option>
                  <option class="select-dropdown_item" value="">
                    Trung bình / Khá
                  </option>
                  <option class="select-dropdown_item" value="">
                    Khá
                  </option>
                  <option class="select-dropdown_item" value="">
                    Giỏi
                  </option>
                  <option class="select-dropdown_item" value="">
                    Xuất sắc
                  </option>
                </select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="fromDate">
                <Form.Label>
                  Thời gian bắt đầu: <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="toDate">
                <Form.Label>
                  Thời gian kết thúc: <span className="required">*</span>
                </Form.Label>
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
              <Form.Group controlId="companyName">
                <Form.Label>Mô tả thêm:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
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

export default EducationModal;
