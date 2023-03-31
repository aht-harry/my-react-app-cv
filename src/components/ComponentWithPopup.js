import React, { useState } from "react";
import PopupWithDropDown from "./PopupWithDropDown";
import PopupWithTextAndCheckbox from "./PopupWithTextAndCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ComponentWithPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleSaveData = (newData) => {
    setData(newData);
    handleClose();
  };
  return (
    <>
      <div className="cv-part">
        <div
          className="cvp-box-child-list"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="cvp-title" onClick={handleShow}>
            <span className="title_box">{props.titleComponent}</span>
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
          <div className="cvp-content">
            {data.id ? (
              data.type != "dropdown" ? (
                <div className="cvp-box-child">
                  <div className="tlp-content">
                    <div className="tlp-content-left">
                      <ul>
                        {data.data.input.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                        {data.data.data ? <li>{data.data.data}</li> : ""}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="cvp-box-child">
                  <div className="tlp-content">
                    <div className="tlp-content-left">
                      {data.input.map((e, i) => (
                        <div key={i}>
                          <p>{e.name}:</p>
                          <p>{e.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
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
          onClose={handleClose}
          onSave={handleSaveData}
          modalTitle={props.modalTitle}
          listSkillDropDown={props.listSkillDropDown}
          evaluateSkill={props.evaluateSkill}
        />
      )}
    </>
  );
};
export default ComponentWithPopup;
