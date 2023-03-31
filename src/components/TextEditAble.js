const TextEditAble = ({ id, placeholder, title }) => {
  return (
    <span
      className="TextEditAble"
      //   id="cv-profile-fullname"
      id={id}
      placeholder={placeholder}
      data-original-title={title}
      contentEditable="true"
    ></span>
  );
};
export default TextEditAble;
