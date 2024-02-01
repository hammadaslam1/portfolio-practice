import "../../styles/global.css";
import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "../../router/Routes";

const Navbar = () => {
  return (
    <nav className="appbar">
      <div>
        <h2 title="Muhammad Hammad Aslam">M H A</h2>
      </div>
      <ul className="list">
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={SKILLS}>Skills</Link>
        </li>
        <li>
          <Link to={PROJECTS}>Projects</Link>
        </li>
        <li>
          <Link to={ABOUT}>About</Link>
        </li>
        <li>
          <Link to={CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
