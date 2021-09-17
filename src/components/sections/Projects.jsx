// Project files
import ProjectsList from "../ProjectsList";
import ProjectModal from "../ProjectModal";
import { projects } from "../../data/pageSections.json";

export default function Projects({ setModal }) {
  const { title, description } = projects;

  // Methods
  function viewProject(item) {
    setModal(<ProjectModal project={item} />);
  }

  return (
    <section className="page-section projects" id="projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="descriptions">
          <p>{description}</p>
        </div>
        <div className="projects-wrapper">
          <ProjectsList viewProject={viewProject} />
        </div>
      </div>
    </section>
  );
}
