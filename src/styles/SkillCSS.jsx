export const SkillCSS = {
  skillContainer: {
    padding: "20px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillsList: {
    display: "flex",
    flexDirection: "column",
  },
  h2: {
    color: "#112d4e",
    fontSize: "22pt",
  },
  lang: {
    fontSize: "16pt",
    color: "#112d4e",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  iconInternal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 15,
  },
  skillItem: {
    flex: "0 0 calc(50% - 20px)",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  },

  h3: {
    marginBottom: "10px",
  },

  skillBar: {
    width: "100%",
    backgroundColor: "#ddd",
    height: "10px",
    borderRadius: "5px",
  },

  skillProgress: {
    height: "100%",
    backgroundColor: "#6ea1f0" /* Change color based on proficiency level */,
    borderRadius: "5px",
    transition: " width 0.5s ease" /* Add transition effect */,
  },
};
