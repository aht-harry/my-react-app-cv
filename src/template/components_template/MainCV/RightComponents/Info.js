import TextEditAble from "../../../../components/TextEditAble";

const Info = (props) => {
  return (
    <div className="cv-part">
      <div className="cvp-box-child-list">
        <div className="cvp-title">
          <span class="title_box">{props.titleComponent}</span>
        </div>
        <div className="cvp-content">
          <div className="ic">
            <p className="ico">
              <i className="change-color fa fa-calendar"></i>
              <TextEditAble placeholder={"Ngày sinh (dd/mm/yyyy)"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <i className="change-color fa fa-calendar"></i>
              <TextEditAble placeholder={"Điện thoại"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <i className="change-color fa fa-calendar"></i>
              <TextEditAble placeholder={"Email liên hệ"} />
            </p>
          </div>
          <div className="ic">
            <p className="ico">
              <i className="change-color fa fa-calendar"></i>
              <TextEditAble placeholder={"Địa chỉ cá nhân"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
