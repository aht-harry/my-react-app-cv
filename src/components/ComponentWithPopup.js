import React, { useState } from "react";
import PopupWithTextAndCheckbox from "./PopupWithTextAndCheckbox";

const ComponentWithPopup = ({ titleComponent, description, icon }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const listCheckbox = [
    "Kỹ năng tổ chức",
    "Quản lý thời gian hiệu quả",
    "Kỹ năng thuyết trình",
    "Kỹ năng làm việc theo nhóm",
    "Tư duy sáng tạo",
    "Kỹ năng lãnh đạo",
    "Kỹ năng giao tiếp",
    "Dễ dàng thích nghi với môi trường mới",
    "Lập kế hoạch",
    "Giải quyết vấn đề"
  ]
  return (
    <>
      <div className="cv-part" onClick={handleShow}>
        <div className="cvp-box-child-list">
          <div className="cvp-title">
            <span className="title_box">{titleComponent}</span>
            {icon ? (
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
            <span>{description}</span>
          </div>
        </div>
      </div>
      <PopupWithTextAndCheckbox check={show} handleClose={handleClose} modalTitle={"Những mục tiêu gợi ý cho bạn"} listCheckbox={listCheckbox} />
    </>
  );
};
export default ComponentWithPopup;
