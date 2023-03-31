import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceModal from "./ExperienceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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

  const handleUpdateExperience = (id, updatedExperience) => {
    setExperiences(
      experiences.map((exp) => (exp.id === id ? updatedExperience : exp))
    );
  };

  return (
    <div className="cv-part part-kinh-nghiem">
      <div className="cvp-box-child-list" >
        <div className="thut-le cvp-title" onClick={handleShowModal}>
          <span className="title_box">Kinh nghiệm làm việc</span>
          <button className="add-more show-modal-exps">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="thut-le cvp-content">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <div key={exp.id} className="cvp-content">
                <div className="cvp-box-child">
                  <div className="fieldgroup_controls">
                    <div
                      className="clone edit-exp"
                      title="Sửa"
                      onClick={() => setShowModal(true)}
                    >
                      <i className="fa fa-edit"></i>
                    </div>
                    <div
                      className="remove delete-exp"
                      title="Xoá"
                      onClick={() => handleDeleteExperience(exp.id)}
                    >
                      Xóa {exp.id}
                    </div>
                  </div>
                  <div className="tlp-content">
                    <div className="tlp-content-left">
                      <b className="tag">
                        {exp.from} - {exp.to}
                      </b>
                    </div>
                    <div className="tlp-content-right">
                      <div className="box-name-tieu-de">
                        <p className="name-noi">{exp.company}</p>
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
