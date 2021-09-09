// NPM Packages
import { useState } from "react";

//Project files
import ProjectsList from "./ProjectsList";
import ProjectsDetails from "./ProjectsDetails";
import Modal from "./Modal";

// The modal can be on App
export default function ProjectsController() {
  //State
  const [isOpen, setIsOpen] = useState(false);
  const [projectChosen, setProjectChosen] = useState(null);

  //Methods
  function viewProject(item) {
    setIsOpen(!isOpen);
    setProjectChosen(item);
  }

  return (
    <div className="projects-wrapper">
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ProjectsDetails project={projectChosen} />
      </Modal>
      <ProjectsList viewProject={viewProject} />
    </div>
  );
}
