import opiniomine01 from "../assets/projectImages/opiniomine.png";
import scorepulse01 from "../assets/projectImages/scorepulse.png";
import dzSocial from "../assets/projectImages/dz-social.png";
import blogs from "../assets/projectImages/blogs.png";
import todoJS from "../assets/projectImages/todo-js.png";
import todoReact from "../assets/projectImages/todo-react.png";
import swiftSwap from "../assets/projectImages/swift-swap.png";
import calculator from "../assets/projectImages/calculator.png";
import hammad from "../assets/projectImages/hammad.png";

// import image from '../'

const createRows = (title, description, buttons, languages, link, image) => {
  return { title, description, buttons, languages, link, image };
};

export const projectsRow = [
  createRows(
    "Hammad Aslam",
    "My Portfolio developed in React JS using Materialized components",
    ["GitHub", "Live"],
    ["JavaScript", "React JS", "Material UI", "CSS"],
    [
      "https://github.com/hammadaslam1/reviews-classifier",
      "https://mha-portfolio.web.app/",
    ],
    hammad
  ),
  createRows(
    "OpinioMine",
    "A system (for my BSIT Capstone Project) that analyzes the customer reviews and classify them on the basis of topics, sentiments and helpfulness",
    ["GitHub"],
    ["Python", "Flask", "JavaScript", "React JS"],
    [
      "https://github.com/hammadaslam1/reviews-classifier",
      // "https://mha-dz-social-club.web.app/",
    ],
    opiniomine01
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
    scorepulse01
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
    dzSocial
  ),
  createRows(
    "MHA Blogs",
    "A simple Blog website on which you can publish your blogs.",
    ["GitHub", "Live"],
    ["React JS", "JavaScript", "Material UI"],
    [
      "https://github.com/hammadaslam1/mha-blogs",
      "https://blogging-website-mha.web.app",
    ],
    blogs
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
    todoReact
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
    swiftSwap
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
    todoJS
  ),
  createRows(
    "Calculator",
    "A simple calculator that performs basic arithmatic operations.",
    ["GitHub", "Live"],
    ["HTML", "JavaScript", "Tailwind"],
    [
      "https://github.com/hammadaslam1/calculator",
      "https://mha-calculator.web.app",
    ],
    calculator
  ),
];

export const homeProjects = [
  createRows(
    "OpinioMine",
    "A system (for my BSIT Capstone Project) that analyzes the customer reviews and classify them on the basis of topics, sentiments and helpfulness",
    ["GitHub"],
    ["Python", "Flask", "JavaScript", "React JS"],
    [
      "https://github.com/hammadaslam1/reviews-classifier",
      // "https://mha-dz-social-club.web.app/",
    ],
    opiniomine01
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
    scorepulse01
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
    dzSocial
  ),
];
