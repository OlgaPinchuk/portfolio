// NPM Packages
import { useState } from "react";

//Project files
import { projectsSection } from "../../data/pageSections.json";
import Modal from "../common/Modal";
import ProjectsList from "../ProjectsList";
import ProjectsDetails from "../ProjectsDetails";

export default function Projects() {
  const { title, description } = projectsSection;

  //State
  const [isOpen, setIsOpen] = useState(false);
  const [projectChosen, setProjectChosen] = useState(null);

  //Methods
  function viewProject(item) {
    setIsOpen(!isOpen);
    setProjectChosen(item);
  }

  return (
    <section className="page-section flex-column projects" id="projects">
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
      <div className="projects-wrapper">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <ProjectsDetails project={projectChosen} />
        </Modal>
        <ProjectsList viewProject={viewProject} />
      </div>
    </section>
  );
}
