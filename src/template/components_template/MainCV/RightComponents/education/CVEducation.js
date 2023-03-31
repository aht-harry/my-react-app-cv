import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import EducationModal from "./EducationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function CVEducation() {
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
      <div className="cvp-box-child-list" onClick={handleShowModal}>
        <div className="thut-le cvp-title">
          <span className="title_box">Học vấn</span>
          <button
            className="add-more show-modal-exps"
          >
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
                      <div
                        className="asdfd"
                        title="Cập nhật"
                        onClick={() => handleUpdateExperience(exp.id)}
                      >
                        Cập nhật {exp.id}
                      </div>
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
              id="no-content-certs"
              class="exp-content show-modal-certs ctbx text-left"
              style={{color: "rgb(153, 153, 153)"}}
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
        onSave={handleSaveExperience}
      />
    </div>
  );
}
export default CVEducation;
