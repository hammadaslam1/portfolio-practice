import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS } from "../../router/Routes";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={ABOUT}>About</Link>
        </li>
        <li>
          <Link to={PROJECTS}>Projects</Link>
        </li>
        <li>
          <Link to={CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
