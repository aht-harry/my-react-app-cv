import React, { useState } from "react";
import PopupWithDropDown from "./PopupWithDropDown";
import PopupWithTextAndCheckbox from "./PopupWithTextAndCheckbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";



const ComponentWithPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);

  const handleSaveData = (newData) => {
    setData([...data, newData]);
    handleClose();
  };

  return (
    <>
      <div className="cv-part" onClick={handleShow}>
        <div className="cvp-box-child-list">
          <div className="cvp-title">
            <span className="title_box">{props.titleComponent}</span>
            {props.icon ? (
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
          <div className="cvp-content">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="cvp-box-child">
                  {/* <div className="fieldgroup_controls">
                    <div
                      className="remove delete-exp"
                      title="Xoá"
                      onClick={() => handleDeleteExperience(exp.id)}
                    >
                      Xóa {exp.id}
                    </div>
                  </div> */}
                  <div className="tlp-content">
                    <div className="tlp-content-left">
                        <p>{item.data}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <span>{props.description}</span>
            )}
          </div>
        </div>
      </div>
      {props.stylePopup == "textandcheckbox" ? (
        <PopupWithTextAndCheckbox
          check={show}
          onClose={handleClose}
          onSave={handleSaveData}
          modalTitle={props.modalTitle}
          listCheckbox={props.listCheckbox}
        />
      ) : (
        <PopupWithDropDown
          check={show}
          handleClose={handleClose}
          modalTitle={props.modalTitle}
          listSkillDropDown={props.listSkillDropDown}
          evaluateSkill={props.evaluateSkill}
        />
      )}
    </>
  );
};
export default ComponentWithPopup;
