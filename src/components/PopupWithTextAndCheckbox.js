import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PopupWithTextAndCheckbox = (props) => {
  const [data, setData] = useState("");

  const[input,setInput] = useState([]);

  const handleSave = () => {
    console.log(input);
    const newData = {
      id: 1,
      data: {
        data: data,
        input: input
      } }
    props.onSave(newData);
  };
  const handleClose = () => {
    setData("");
    props.onClose();
  };
  const selectChange = (e) => {
    if (e.target.checked) {
      setInput((prevInput) => [...prevInput, e.target.value]);
    } else {
      setInput((prevInput) => prevInput.filter((value) => value !== e.target.value));
    }
  }
  return (
    <div className="modal">
      <Modal show={props.check} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="el-dialog__body">
              <textarea
                rows="5"
                className="notAuto"
                value={data}
                onChange={(e) => setData(e.target.value)}
              ></textarea>
              <div className="row">
                {props.listCheckbox.map((e, i) => (
                  <div key={i} className="col-md-6">
                    <div className="el-checkbox-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          id={i}
                          value={e}
                          class="custom-control-input"
                          checked={input.includes(e)}
                          onChange={selectChange}
                        />
                        <label htmlFor={i} class="custom-control-label">
                          {e}
                        </label>
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
          <Button variant="primary" onClick={handleSave}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PopupWithTextAndCheckbox;
