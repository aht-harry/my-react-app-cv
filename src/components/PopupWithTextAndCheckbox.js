import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PopupWithTextAndCheckbox = ({
  check,
  handleClose,
  modalTitle,
  listCheckbox,
}) => {
  return (
    <div className="modal">
      <Modal show={check} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="el-dialog__body">
              <textarea rows="5" className="notAuto"></textarea>
              <div className="row">
                {listCheckbox.map((e, i) => (
                  <div className="col-md-6">
                    <div className="el-checkbox-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id={i} class="custom-control-input"/>
                        <label for={i} class="custom-control-label">{e}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bỏ qua
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PopupWithTextAndCheckbox;
