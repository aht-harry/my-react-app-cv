import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import EducationModal from "./EducationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
function CVEducation() {
  const [showModal, setShowModal] = useState(false);
  const [education, setEducation] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSaveEducation = (newEducation) => {
    setEducation([...education, newEducation]);
    handleCloseModal();
  };

  const handleDeleteEduction = (id) => {
    setEducation(education.filter((exp) => exp.id !== id));
  };

  // const handleUpdateExperience = (id, updatedExperience) => {
  //   setExperiences(
  //     experiences.map((exp) => (exp.id === id ? updatedExperience : exp))
  //   );
  // };

  return (
    <div className="cv-part part-kinh-nghiem">
      <div className="cvp-box-child-list">
        <div className="thut-le cvp-title" onClick={handleShowModal}>
          <span className="title_box">Học vấn</span>
          <button className="add-more show-modal-exps">
            <span
              data-toggle="tooltip"
              data-placement="top"
              data-original-title="Thêm"
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </button>
        </div>
        <div className="thut-le cvp-content">
          {education.length > 0 ? (
            education.map((exp) => (
              <div key={exp.id} className="cvp-content">
                <div className="cvp-box-child">
                  <div className="fieldgroup_controls"></div>
                  <div className="tlp-content">
                    <div className="tlp-content-left">
                      <Row>
                        <Col md={6}>
                          <div className="certification">
                            <b>{exp.certification}</b>
                          </div>
                        </Col>
                        <Col md={6}>
                          <b className="tag">
                            ({exp.dateStart} - {exp.dateEnd})
                          </b>
                        </Col>
                      </Row>
                      <div
                        className="remove delete-exp"
                        title="Xoá"
                        onClick={() => handleDeleteEduction(exp.id)}
                      >
                        <div className="icon-remove">
                          <FontAwesomeIcon icon={faXmark} />
                        </div>
                      </div>
                    </div>
                    <div className="tlp-content-right">
                      <p>
                        <b>Trường/ nơi đào tạo: </b>
                        <span>{exp.school}</span>
                      </p>
                      <p>
                        <b>Khoa: </b>
                        <span>{exp.department}</span>
                      </p>
                      <p>
                        <b>Chuyên ngành: </b>
                        <span>{exp.specialized}</span>
                      </p>
                      <p>
                        <b>Xếp loại: </b>
                        <span>{exp.classification}</span>
                      </p>
                      <p>
                        <b>Mô tả: </b>
                        <p>{exp.description}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              id="no-content-certs"
              class="exp-content show-modal-certs ctbx text-left"
              style={{ color: "rgb(153, 153, 153)" }}
            >
              Cử nhân
              <br />
              Trường/nơi đào tạo: Đại học Công nghiệp Hà Nội
              <br />
              Xếp loại: Khá
              <br />
              Khoa: Kế toán
              <br />
              Mô tả:
              <br />
              Được đào tạo các nghiệp vụ chuyên ngành kế toán
              <br />
              Đạt nhiều thành tích trong học tập, học bổng hàng năm
            </div>
          )}
        </div>
      </div>
      <EducationModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveEducation}
      />
    </div>
  );
}
export default CVEducation;
