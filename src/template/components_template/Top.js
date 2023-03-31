import "../../assets/src/styles/top_styles.css";
import Avatar from "../../assets/src/images/no_avatar.jpg";
import TextEditAble from "../../components/TextEditAble";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
const Top = () => {
  const [selectedImage, setSelectedImage] = useState(Avatar);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <div data-toggle="tooltip" title="" data-original-title="Chọn avatar">
            <div id="click_upload" style={{ width: "200px", height: "200px" }}>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
                id="avatar-file-input"
              />
              <label htmlFor="avatar-file-input">
                <img
                  src={selectedImage}
                  style={{ width: "200px", height: "200px" }}
                  id="cvo-profile-avatar"
                  alt="Avatar"
                />
                <div className="icon-pic">
                  <i className="fa fa-camera"></i>
                </div>
              </label>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className="box-ten">
            <div>
              <TextEditAble
                id={"cv-profile-fullname"}
                placeholder={"Tên của bạn"}
                title={"Tên của bạn"}
              />
            </div>
            <div>
              <TextEditAble
                id={"cv-profile-job"}
                placeholder={"Vị trí công việc bạn muốn ứng tuyển"}
                title={"Vị trí công việc bạn muốn ứng tuyển"}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Top;
