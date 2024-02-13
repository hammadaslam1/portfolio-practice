export const NavbarCSS = {
  appbar: {
    backgroundColor: " #112d4e",
    height: " 60px",
    display: " flex",
    justifyContent: " space-between",
    alignItems: " center",
    paddingLeft: " 40px",
    paddingRight: " 20px",
    position: " sticky",
    top: " 0",
    zIndex: " 1",
  },
  logoTitle: {
    color: "#fff",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#f00",
    },
  },
  // list: {
  //   display: "flex",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   width: "50%",
  //   flexWrap: "wrap",
  //   fontSize: "18pt",
  // },
  link: {
    textDecoration: "none",
    color: "#fff",
    borderBottom: "2px solid transparent",
  },
  listItem: {
    listStyle: "none",
    WebkitTransition: "all 1s",
    borderBottom: "2px solid transparent ",
    transition: "all 1s",
    transitionTimingFunction: "linear",
  },
  listItemHover: {
    fontSize: "18",
    borderBottom: "2px solid #fff",
    transitionTimingFunction: "ease",
  },
};
