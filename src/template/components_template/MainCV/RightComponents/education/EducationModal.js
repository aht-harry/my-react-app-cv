import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
function EducationModal(props) {
  const [schoolName, setSchoolName] = useState("");
  const [department, setDepartment] = useState("");
  const [certification, setCertification] = useState("");
  const [specialized, setSpecialized] = useState("");
  const [classification, setClassification] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newEducation = {
      id: Date.now(),
      school: schoolName,
      department: department,
      certification: certification,
      specialized: specialized,
      classification: classification,
      dateStart: dateStart,
      dateEnd: dateEnd,
      description: description
    };
    props.onSave(newEducation);
  };

  const handleClose = () => {
    setSchoolName("");
    setDepartment("");
    setCertification("");
    setSpecialized("");
    setClassification("");
    setDateStart("");
    setDateEnd("");
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
              <Form.Group controlId="schoolName">
                <Form.Label>
                  Trường, trung tâm đào tạo:
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên"
                  required
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="department">
                <Form.Label>Khoa đào tạo: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên khoa"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={12}>
              <Form.Group controlId="certification">
                <Form.Label>
                  Tên bằng cấp chứng chỉ:
                  <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="VD: Cử nhân luật, Kỹ sư CNTT, Chứng chỉ nghề điện dân dụng..."
                  required
                  value={certification}
                  onChange={(e) => setCertification(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="specialized">
                <Form.Label>Chuyên ngành đào tạo:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="VD: Công nghệ thông tin, Kế toán..."
                  value={specialized}
                  onChange={(e) => setSpecialized(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="classification">
                <Form.Label>
                  Xếp loại: <span className="required">*</span>
                </Form.Label>
                <select
                  className="select-dropdown select-dropdown-nomal valid"
                  data-placeholder="Chọn"
                  aria-invalid="false"
                  onChange={(e) => setClassification(e.target.value)}
                >
                  <option class="select-dropdown_item" value="">
                    Chọn xếp loại
                  </option>
                  <option class="select-dropdown_item" value="Yếu">
                    Yếu
                  </option>
                  <option class="select-dropdown_item" value="Trung bình">
                    Trung bình
                  </option>
                  <option class="select-dropdown_item" value="Trung bình / Khá">
                    Trung bình / Khá
                  </option>
                  <option class="select-dropdown_item" value="Khá">
                    Khá
                  </option>
                  <option class="select-dropdown_item" value="Giỏi">
                    Giỏi
                  </option>
                  <option class="select-dropdown_item" value="Xuất sắc">
                    Xuất sắc
                  </option>
                </select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={6}>
              <Form.Group controlId="dateStart">
                <Form.Label>
                  Thời gian bắt đầu: <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="dateEnd">
                <Form.Label>
                  Thời gian kết thúc: <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row-popup">
            <Col md={12}>
              <Form.Group controlId="description">
                <Form.Label>Mô tả thêm:</Form.Label>
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

export default EducationModal;
