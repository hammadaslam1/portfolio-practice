// import "../../styles/global.css";
import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "../../router/Routes";
import { NavbarCSS } from "../../styles/NavbarCSS";
import { MyName } from "../data/Strings";
import { useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const links = [
    {
      to: HOME,
      title: "Home",
    },
    {
      to: SKILLS,
      title: "Skills",
    },
    {
      to: PROJECTS,
      title: "Projects",
    },
    {
      to: ABOUT,
      title: "About",
    },
    {
      to: CONTACT,
      title: "Contact",
    },
  ];
  return (
    <nav style={NavbarCSS.appbar}>
      <div>
        <h1 style={NavbarCSS.logoTitle} title={MyName}>
          M H A
        </h1>
      </div>
      <ul style={NavbarCSS.list}>
        {links.map((data, i) => (
          <li
            key={i}
            style={
              hoveredIndex === i
                ? { ...NavbarCSS.listItem, ...NavbarCSS.listItemHover }
                : NavbarCSS.listItem
            }
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link style={NavbarCSS.link} to={data.to}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
