// import "../../styles/global.css";
import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "../../router/Routes";
import { NavbarCSS } from "../../styles/NavbarCSS";
import { MyName } from "../data/Strings";
import { useEffect, useRef, useState } from "react";
import { MenuCSS } from "../../styles/MenuCSS";
import Menu from "./Menu";
import MenuIcon from "../assets/svg/MenuIcon";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav style={NavbarCSS.appbar}>
      <div>
        <h1 style={NavbarCSS.logoTitle} title={MyName}>
          M H A
        </h1>
      </div>
      <ul
        className="list"
        // style={NavbarCSS.list}
      >
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
      <div
        style={MenuCSS.menuContainer}
        className="menu-container"
        ref={menuRef}
      >
        <button style={MenuCSS.menuButton} onClick={toggleMenu}>
          <MenuIcon height={40} />
        </button>
        {isMenuOpen && <Menu onClick={setIsMenuOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
