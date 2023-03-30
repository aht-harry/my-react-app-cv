import "../../assets/src/styles/top_styles.css";
import Avatar from "../../assets/src/images/no_avatar.jpg";
import TextEditAble from "../../components/TextEditAble";
const Top = () => {
  return (
    <div className="cv-chia-cot dong-top">
      <div id="anh_bg_2"></div>
      <div
        id="anh_bg_1"
        data-toggle="tooltip"
        title=""
        data-original-title="Chọn avatar"
      >
        <div
          id="click_upload"
          style={{ width: "200px", height: "200px" }}
        ></div>
      </div>
      <div className="cv-cot-trai">
        <div className="avatar-user">
          <div className="box-dm">
            <div className="wimgS">
              <div className="box-imgupload" style={{ position: "relative" }}>
                <img src={Avatar} id="cvo-profile-avatar" />
                <div className="icon-pic">
                  <i className="fa fa-camera"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cv-cot-phai">
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
      </div>
      <div id="anh_bg_3"></div>
    </div>
  );
};
export default Top;
