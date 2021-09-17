// Npm Packages
import { useState } from "react";

// Project files
import Modal from "../common/Modal";
import ProjectsList from "../ProjectsList";
import ProjectsDetails from "../ProjectsDetails";
import { projects } from "../../data/pageSections.json";

export default function Projects() {
  const { title, description } = projects;

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [projectChosen, setProjectChosen] = useState(null);

  // Methods
  function viewProject(item) {
    setIsOpen(!isOpen);
    setProjectChosen(item);
  }

  return (
    <section className="page-section projects" id="projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="descriptions">
          <p>{description}</p>
        </div>
        <div className="projects-wrapper">
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <ProjectsDetails project={projectChosen} />
          </Modal>
          <ProjectsList viewProject={viewProject} />
        </div>
      </div>
    </section>
  );
}
