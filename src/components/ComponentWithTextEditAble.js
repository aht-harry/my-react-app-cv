import TextEditAble from "./TextEditAble";

const ComponentWithTextEditAble = ({ titleComponent }) => {
  return (
    <div className="cv-part">
      <div className="cvp-box-child-list">
        <div className="cvp-title">
          <span class="title_box">{titleComponent}</span>
        </div>
        <div className="cvp-content">
            <TextEditAble placeholder={"Toiec 700 điểm"} />
        </div>
      </div>
    </div>
  );
};
export default ComponentWithTextEditAble;
