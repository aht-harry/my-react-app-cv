import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PopupWithDropDown = (props) => {
  return (
    <div className="modal">
      <Modal show={props.check} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-main">
            <div className="el-dialog__body">
              <form
                id="m-skill-software"
                className="el-form mt-10 el-form--label-top"
                novalidate="novalidate"
              >
                <div className="list-skill-software">
                  {props.listSkillDropDown.map((e, i) => (
                    <div className="list-item row">
                      <div className="col-6">
                        <div className="el-form-item is-required">
                          <label className="el-form-item__label">{e}</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="el-form-item is-required">
                          <div className="el-form-item__content">
                            <div className="el-select">
                              <select
                                className="select-dropdown select-dropdown-nomal valid"
                                name="skill_software[Ms Word]"
                                data-placeholder="Chọn"
                                aria-invalid="false"
                              >
                                {props.evaluateSkill.map((item, index) => (
                                  <option
                                    class="select-dropdown_item"
                                    value={index}
                                  >
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            <span>
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ marginRight: "5px" }}
              />
              Bỏ qua
            </span>
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
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
    </div>
  );
};
export default PopupWithDropDown;
