import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceModal from "./ExperienceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
function CVExperience() {
  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSaveExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
    handleCloseModal();
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringDelete, setIsHoveringDelete] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOverDelete = () => {
    setIsHoveringDelete(true);
  };

  const handleMouseOutDelete = () => {
    setIsHoveringDelete(false);
  };
  return (
    <div className="cv-part part-kinh-nghiem">
      <div className="cvp-box-child-list">
        <div
          className="thut-le cvp-title"
          onClick={handleShowModal}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <span className="title_box">Kinh nghiệm làm việc</span>
          {isHovering ? (
            <button
              className="add-more"
              style={{ position: "relative", top: "-3px", right: "-15px" }}
            >
              <span
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Thêm"
              >
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="thut-le cvp-content">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp.id} className="cvp-content">
                <div className="cvp-box-child">
                  <div className="tlp-content">
                    {isHoveringDelete ? (
                      <div
                        className="remove delete-exp"
                        title="Xoá"
                        onClick={() => handleDeleteExperience(exp.id)}
                        onMouseOver={handleMouseOverDelete}
                        onMouseOut={handleMouseOutDelete}
                      >
                        <div className="icon-remove">
                          <FontAwesomeIcon icon={faXmark} />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="tlp-content-left">
                      <Row
                        onMouseOver={handleMouseOverDelete}
                        onMouseOut={handleMouseOutDelete}
                      >
                        <Col md={6}>
                          <b className="tag">
                            {exp.from} - {exp.to}
                          </b>
                        </Col>
                        <Col md={6}>
                          <div className="tlp-content-right">
                            <div className="box-name-tieu-de">
                              <p className="name-noi">
                                <span>{exp.company}</span>
                              </p>
                            </div>
                            <p>
                              <b>Vị trí: </b>
                              <span>{exp.position}</span>
                            </p>
                            <p>
                              <b>Mô tả: </b>
                              <br />
                              {exp.description}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              id="no-content-exp"
              className="exp-content ctbx text-center pt-15 show-modal-exps"
            >
              Chưa cập nhật thông tin
            </div>
          )}
        </div>
      </div>
      <ExperienceModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveExperience}
      />
    </div>
  );
}
export default CVExperience;
