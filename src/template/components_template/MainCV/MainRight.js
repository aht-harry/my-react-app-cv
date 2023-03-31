
import CVEducation from "./RightComponents/education/CVEducation";
import CVExperience from "./RightComponents/experience/CVExperience";
import Info from "./RightComponents/Info";

const MainRight = () => {
  return (
    <>
      <Info titleComponent="thông tin cá nhân" />
      <CVEducation />
      <CVExperience />
    </>
  );
};
export default MainRight;
