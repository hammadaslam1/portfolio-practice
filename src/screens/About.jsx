import { useEffect } from "react";
import { AboutCSS } from "../styles/AboutCSS";

const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={AboutCSS.about}>
      <h1 className="pageTitle">About me</h1>
      <div style={AboutCSS.aboutPara}>
        <p>
          I'm <span className="highlight">Hammad Aslam</span>, a recent IT
          Graduate from Punjab, Pakistan.
        </p>
        <p>
          I have done my Matriculation from Govt. Jauhar Memorial High School,
          Jauharabad in the session 2014-16 under BISE Sargodha securing{" "}
          <span className="highlight">64%</span> marks.
        </p>
        <p>
          I have done my Intermediate with Computer Science from Govt. Post
          Graduate College, Jauharabad in the session 2016-18 under BISE
          Sargodha securing <span className="highlight">65%</span> marks.
        </p>
        <p>
          I have done my undergraduation with Computer Science from Govt. Post
          Graduate College, Jauharabad under the affiliation of University of
          Sargodha in the session 2018-2020 securing{" "}
          <span className="highlight">52%</span> marks.
        </p>
        <p>
          I have done a Diploma of Information Technology from Information
          Technology Centre, Jauharabad under Punjab Board of Technical
          Education in the session 2020-2021 securing{" "}
          <span className="highlight">78%</span> marks.
        </p>
        <p>
          I have done my BS Information Technology (Post ADP) University of
          Education, Lahore in the session 2022-2024. My CGPA is{" "}
          <span className="highlight">3.63</span>.
        </p>
        <p>
          I have worked on my final year project,{" "}
          <span className="highlight">
            'Customer Reviews Classification and Analysis System using Data
            Mining and NLP'
          </span>
          . Basically it is a system that analyzes the customer reviews and
          classify them on the basis of topics, sentiments and helpfulness.
          These reviews are taken from various E-commerce platforms like Amazon
          and Daraz.
        </p>
        <p>
          I recently attended an{" "}
          <span className="highlight">
            Apprenticeship Program for IT Graduates
          </span>{" "}
          under{" "}
          <span className="highlight">
            PSEB (Pakistan Software Export Board)
          </span>{" "}
          in the known Healthcare IT Company{" "}
          <span className="highlight">Maaz Informatics</span> in Sargodha, where
          I spent 2 months as a <span className="highlight">MERN Stack</span>{" "}
          and <span className="highlight">Next JS</span> apprentice.
        </p>
        <p>
          I worked on a{" "}
          <span className="highlight">Smart FYP Management System</span>. This
          system is all about digitalizing the process of Capstone Project
          between supervisors, coordinators and students of final year.
        </p>
        <p>
          I have interests in Data Science and Web Development. I have developed
          some projects for Web and android in{" "}
          <span className="highlight">React JS</span> and{" "}
          <span className="highlight">React Native</span> respectively and my
          Final Year Project was analysis and research based, in which I worked
          with <span className="highlight">Python</span>
        </p>
        <p>I'm looking for the opportunities to enhance my skills.</p>
        <p>
          I enjoy working on side projects to upskill myself and learn new
          stuff.
        </p>
      </div>
    </div>
  );
};

export default About;
