import BookCard from "../components/cards/BookCard";
import opiniomine01 from "../components/assets/projectImages/opiniomine.png";
import opiniomine02 from "../components/assets/projectImages/opiniomine02.png";
import scorepulse01 from "../components/assets/projectImages/icon_lite.png";
import scorepulse02 from "../components/assets/projectImages/scorepulse02.jpg";
import scorepulse03 from "../components/assets/projectImages/scorepulse03.jpg";

/* eslint-disable react/jsx-no-target-blank */
const Projects = () => {
  const createRows = (title, description, buttons, languages, link, image) => {
    return { title, description, buttons, languages, link, image };
  };
  const projectsRow = [
    createRows(
      "OpinioMine",
      "A system that analyzes the customer reviews and classify them on the basis of fakeness, sentiments, topics and context (Not completed yet)",
      ["GitHub"],
      ["Python", "Flask", "JavaScript", "React JS"],
      [
        "https://github.com/hammadaslam1/reviews-classifier",
        // "https://mha-dz-social-club.web.app/",
      ],
      [opiniomine01, opiniomine02]
    ),
    createRows(
      "Score Pulse",
      "A simple Mobile App for managing scores of cricket matches developed using React Native",
      ["GitHub"],
      ["React Native", "JavaScript", "Native UI"],
      [
        "https://github.com/hammadaslam1/score-pulse",
        // "https://mha-dz-social-club.web.app/",
      ],
      [scorepulse01, scorepulse02, scorepulse03]
    ),
    createRows(
      "00 Social Club",
      "A simple Web based UI design using React JS for Double Zero Social Club.",
      ["GitHub", "Live"],
      ["React JS", "JavaScript", "Material UI"],
      [
        "https://github.com/hammadaslam1/00-Social-Club-UI",
        "https://mha-dz-social-club.web.app/",
      ],
      []
    ),
    createRows(
      "Blogs Website",
      "A simple Blog website on which you can publish your blogs.",
      ["GitHub", "Live"],
      ["React JS", "JavaScript", "Material UI"],
      [
        "https://github.com/hammadaslam1/mha-blogs",
        "https://blogging-website-mha.web.app",
      ],
      []
    ),
    createRows(
      "To-Do App",
      "A simple To-Do app developed using React JS.",
      ["GitHub", "Live"],
      ["React JS", "JavaScript"],
      [
        "https://github.com/hammadaslam1/to-do-React-js",
        "https://todo-app-reactjsx.web.app",
      ],
      []
    ),
    createRows(
      "MHA's Swift Swap",
      "A simple online exchange website for online goods exchange.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/mha-s-swift-swap",
        "https://mha-s-swift-swap.web.app",
      ],
      []
    ),
    createRows(
      "To-Do App",
      "A simple To-Do app that saves your tasks.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/to-do-firebase",
        "https://todo-hammad.web.app",
      ],
      []
    ),
    createRows(
      "Simple Calculator",
      "A simple calculator that performs basic arithmatic operations.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/calculator",
        "https://mha-calculator.web.app",
      ],
      []
    ),
  ];
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectItem">
        {projectsRow.map((data, i) => (
          <BookCard
            title={data.title}
            description={data.description}
            buttons={data.buttons}
            languages={data.languages}
            link={data.link}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
