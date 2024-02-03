import BookCard from "../components/cards/BookCard";
import { projectsRow } from "../components/data/ProjectsData";

/* eslint-disable react/jsx-no-target-blank */
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="pageTitle">My Projects</h1>
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
