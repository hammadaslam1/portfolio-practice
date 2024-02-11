import { SkillCSS } from "../styles/SkillCSS";

const Skills = () => {
  return (
    <div style={SkillCSS.skillContainer}>
      {/* <div style={HomeCSS.overlay}></div> */}
      <h1 style={SkillCSS.h1} className="pageTitle">
        My Skills
      </h1>
    </div>
  );
};

export default Skills;
