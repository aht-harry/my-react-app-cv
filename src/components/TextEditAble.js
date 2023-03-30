const TextEditAble = ({ id, placeholder, title }) => {
  return (
    <span
      className="TextEditAble"
      //   id="cv-profile-fullname"
      id={id}
      placeholder={placeholder}
      data-original-title={title}
      contenteditable="true"
    ></span>
  );
};
export default TextEditAble;
