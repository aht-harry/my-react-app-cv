import ComponentWithPopup from "../../../components/ComponentWithPopup";
import ComponentWithTextEditAble from "../../../components/ComponentWithTextEditAble";

const MainLeft = () => {
  const listCheckbox = [
    "Mong muốn tìm được chỗ làm ổn định lâu dài",
    "Mong muốn tìm được chỗ làm có cơ hội thăng tiến tốt",
    "Mong muốn tìm được chỗ làm có mức lương tốt",
    "Mong muốn tìm được nơi có cơ hội cống hiến bản thân tốt",
  ];
  const listCheckboxSkill = [
    "Kỹ năng tổ chức",
    "Quản lý thời gian hiệu quả",
    "Kỹ năng thuyết trình",
    "Kỹ năng làm việc theo nhóm",
    "Tư duy sáng tạo",
    "Kỹ năng lãnh đạo",
    "Kỹ năng giao tiếp",
    "Dễ dàng thích nghi với môi trường mới",
    "Lập kế hoạch",
    "Giải quyết vấn đề",
  ];
  const listSkillDropDown = [
    "Ms Word",
    "Ms Excel",
    "Ms Power Point",
    "Ms Outlook",
  ];
  const evaluateSkill = ["Chọn", "Kém", "Trung bình", "Khá", "Tốt"];
  const foreignLanguages = [
    "Tiếng Anh",
    "Tiếng Pháp",
    "Tiếng Nga",
    "Tiếng Hàn",
    "Tiếng Trung",
  ];
  const evaluateLanguages = [
    "Chọn",
    "Sơ cấp",
    "Trung cấp",
    "Cao cấp",
    "Bản ngữ",
  ];
  return (
    <>
      <div id="anh_bg_4"></div>
      <div className="row-left muc-tieu-nghe-nghiep">
        <ComponentWithPopup
          titleComponent={"mục tiêu nghề nghiệp"}
          description={"Chọn mục tiêu nghề nghiệp"}
          listCheckbox={listCheckbox}
          modalTitle={"Những mục tiêu gợi ý cho bạn"}
          stylePopup={"textandcheckbox"}
        />
      </div>
      <div className="row-left ky-nang">
        <ComponentWithPopup
          titleComponent={"kỹ năng"}
          description={"Chọn kỹ năng"}
          listCheckbox={listCheckboxSkill}
          modalTitle={"Những kĩ năng gợi ý phù hợp với bạn"}
          stylePopup={"textandcheckbox"}
        />
      </div>
      <div className="row-left tin-hoc">
        <ComponentWithPopup
          titleComponent={"tin học"}
          modalTitle={"Thêm mới kỹ năng"}
          listSkillDropDown={listSkillDropDown}
          evaluateSkill={evaluateSkill}
          icon={true}
          description={"Word: Giỏi"}
        />
      </div>
      <div className="row-left ngoai-ngu">
        <ComponentWithPopup
          titleComponent={"ngoại ngữ"}
          modalTitle={"Thêm mới ngoại ngữ"}
          listSkillDropDown={foreignLanguages}
          evaluateSkill={evaluateLanguages}
          icon={true}
          description={"Tiếng Anh: Giỏi"}
        />
      </div>
      <div className="row-left giai-thuong">
        <ComponentWithTextEditAble
          titleComponent={"giải thưởng"}
          placeholder={
            "Nhân viên xuất sắc nhất năm 2020 tại Công Ty TNHH Eyeplus Online"
          }
        />
      </div>
      <div className="row-left chung-chi">
        <ComponentWithTextEditAble
          titleComponent={"chứng chỉ"}
          placeholder={"Toiec 700 điểm"}
        />
      </div>
    </>
  );
};
export default MainLeft;
