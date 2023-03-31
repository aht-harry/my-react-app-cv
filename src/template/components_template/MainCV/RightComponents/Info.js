import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextEditAble from "../../../../components/TextEditAble";
import {
  faCalendar,
  faEnvelope,
  faMapMarkerAlt,
  faMarsAndVenus,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

const Info = (props) => {
  return (
    <div className="cv-part info">
      <div className="cvp-box-child-list">
        <div className="cvp-title">
          <span className="title_box">{props.titleComponent}</span>
        </div>
        <div className="cvp-content">
          <div className="ic">
            <p className="ico">
              <FontAwesomeIcon icon={faMarsAndVenus} />
              <Form>
                <div>
                  <Form.Check type="radio" name="gender" id="male" label="Nam" value="Nam"/>
                  <Form.Check type="radio" name="gender" id="female" label="Nữ" value="Nữ"/>
                </div>
              </Form>
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <FontAwesomeIcon icon={faCalendar} />
              <TextEditAble placeholder={"Ngày sinh (dd/mm/yyyy)"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <FontAwesomeIcon icon={faPhone} />
              <TextEditAble placeholder={"Điện thoại"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <FontAwesomeIcon icon={faEnvelope} />
              <TextEditAble placeholder={"Email liên hệ"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <TextEditAble placeholder={"Địa chỉ cá nhân"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
