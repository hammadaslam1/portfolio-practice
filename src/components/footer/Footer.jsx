/* eslint-disable react/jsx-no-target-blank */
import "../../styles/global.css";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div>
        <h2 title="Muhammad Hammad Aslam">M H A</h2>
      </div> */}
      <div>
        <span title="Mad Coder">
          &copy; copyrights -{" "}
          <a href="https://mha-portfolio.web.app" target="_blank">
            Mad Coder
          </a>
        </span>
      </div>
      {/* <div>
        <h2 title="Muhammad Hammad Aslam">M H A</h2>
      </div> */}
    </div>
  );
};

export default Footer;
