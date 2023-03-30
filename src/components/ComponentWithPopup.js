import React, { useState } from "react";
import PopupWithDropDown from "./PopupWithDropDown";
import PopupWithTextAndCheckbox from "./PopupWithTextAndCheckbox";

const ComponentWithPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <i className="fa fa-plus"></i>
                </span>
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="cvp-content">
            <span>{props.description}</span>
          </div>
        </div>
      </div>
      {props.stylePopup == "textandcheckbox"?
      <PopupWithTextAndCheckbox check={show} handleClose={handleClose} modalTitle={props.modalTitle} listCheckbox={props.listCheckbox} />
      :
      <PopupWithDropDown check={show} handleClose={handleClose} modalTitle={props.modalTitle} listSkillDropDown={props.listSkillDropDown} evaluateSkill={props.evaluateSkill}/>
      }
    </>
  );
};
export default ComponentWithPopup;
