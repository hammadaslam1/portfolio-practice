import { HomeCSS } from "../styles/HomeCSS";
import "../styles/global.css";
// import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div style={HomeCSS.homeContainer}>
      {/* <div style={HomeCSS.overlay}></div> */}
      <h1 style={HomeCSS.h1} className="pageTitle">
        Welcome
      </h1>
      <div style={HomeCSS.homeContent}>
        <p>
          I'm a passionate Web Developer based in Jauharabad.
        </p>
        <p>
          Explore my projects, learn more about me, and feel free to get in
          touch!
        </p>
        <div className="cta-section">
          <a href="/projects" className="cta-button">
            View Projects
          </a>
          <a href="/contact" className="cta-button">
            Get in Touch
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/hammadaslam10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>a
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
