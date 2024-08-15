import { Link } from "react-router-dom";
import BookCard from "../components/cards/BookCard";
import { homeProjects } from "../components/data/ProjectsData";
import { HomeCSS } from "../styles/HomeCSS";
import { PROJECTS, SKILLS } from "../router/Routes";
import "../styles/global.css";
import { useEffect, useState } from "react";
import { SkillCSS } from "../styles/SkillCSS";
import { shortTech } from "../components/data/SkillsData";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [contact, setContact] = useState(false);
  const [skills, setSkills] = useState(false);
  const handleMouse = () => {
    setHovered(!hovered);
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={HomeCSS.homeContainer}>
      {/* <div style={HomeCSS.overlay}></div> */}
      <h1 className="pageTitle">Hammad Aslam</h1>
      <p>
        MERN Stack Developer <span className="highlight">|</span> Next JS Developer <span className="highlight">|</span> Python
      </p>
      {/* Add an image or background here */}

      <section style={HomeCSS.about}>
        <h2 style={HomeCSS.h2}>About Me</h2>
        <p>
          An enthusiastic MERN stack developer who delights in fashioning
          user-friendly web apps and captivating web experiences.
        </p>
      </section>

      <section
        className="projects"
        style={{ paddingBottom: "0px", marginBottom: 0 }}
      >
        <h2 style={HomeCSS.h2}>Featured Projects</h2>
        <div className="homeProj">
          {homeProjects.map((data, i) => (
            <BookCard
              title={data.title}
              description={data.description}
              buttons={data.buttons}
              languages={data.languages}
              link={data.link}
              image={data.image}
            />
          ))}
        </div>
        <Link
          onMouseOver={handleMouse}
          onMouseLeave={handleMouse}
          style={
            hovered ? HomeCSS.link : { ...HomeCSS.link, ...HomeCSS.linkHover }
          }
          to={PROJECTS}
        >
          See All
        </Link>
      </section>

      <section
        className="projects"
        style={{ paddingBottom: "0px", marginBottom: 0 }}
      >
        <h2 style={HomeCSS.h2}>Skills & Expertise</h2>
        <div style={SkillCSS.icons}>
          {shortTech.map((data, i) => (
            <div style={SkillCSS.iconInternal} key={i}>
              <span>{data.icon}</span>
              <span style={SkillCSS.lang}>{data.name}</span>
            </div>
          ))}
        </div>
        <Link
          onMouseOver={() => setSkills(!skills)}
          onMouseLeave={() => setSkills(!skills)}
          style={
            skills ? HomeCSS.link : { ...HomeCSS.link, ...HomeCSS.linkHover }
          }
          to={SKILLS}
        >
          See All
        </Link>
      </section>

      {/* <section
        className="projects"
        style={{ paddingBottom: "0px", marginBottom: 0 }}
      >
        <Link
          onMouseOver={() => setContact(!contact)}
          onMouseLeave={() => setContact(!contact)}
          style={
            contact ? HomeCSS.link : { ...HomeCSS.link, ...HomeCSS.linkHover }
          }
          to={PROJECTS}
        >
          Contact me
        </Link>
      </section> */}
    </div>
  );
};

export default Home;
