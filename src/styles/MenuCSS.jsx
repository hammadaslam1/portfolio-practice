export const MenuCSS = {
//   menuContainer: {
//     display: 'none',
//     position: "relative",
//   },
  menuButton: {
    backgroundColor: "transparent",
    height: 50,
    width: 50,
    border: "none",
    borderRadius: '50%',
    cursor: "pointer",
    fontSize: "16pt",
    display: 'flex',
    alignItems: 'center',
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 5,
    backgroundColor: "#112d4e",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  ul: {
    width: 200,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    padding: 10,
    color: '#fff',
    fontSize: '16pt',
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
};
