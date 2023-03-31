import TextEditAble from "./TextEditAble";

const ComponentWithTextEditAble = (props) => {
  return (
    <div className="cv-part">
      <div className="cvp-box-child-list">
        <div className="cvp-title">
          <span className="title_box">{props.titleComponent}</span>
        </div>
        <div className="cvp-content">
            <TextEditAble placeholder={props.placeholder} />
        </div>
      </div>
    </div>
  );
};
export default ComponentWithTextEditAble;
