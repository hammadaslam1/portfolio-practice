import { Link } from "react-router-dom";
import { MenuCSS } from "../../styles/MenuCSS";
import { NavbarCSS } from "../../styles/NavbarCSS";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "../../router/Routes";

const Menu = (props) => {
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

  const handleClick = () => {
    props.onClick(false)
  }
  return (
    <div style={MenuCSS.dropdownMenu}>
      <ul style={MenuCSS.ul}>
        {links.map((data, i) => (
          <li key={i} onClick={handleClick} style={MenuCSS.li}>
            <Link style={NavbarCSS.link} to={data.to}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
