import { MenuCSS } from "../../styles/MenuCSS";

const Menu = (props) => {
  return (
    
      <div style={MenuCSS.dropdownMenu}>
        <ul style={MenuCSS.ul}>
          <li style={MenuCSS.li}>Home</li>
          <li style={MenuCSS.li}>About</li>
          <li style={MenuCSS.li}>Services</li>
          <li style={MenuCSS.li}>Contact</li>
        </ul>
      </div>

  );
};

export default Menu;
