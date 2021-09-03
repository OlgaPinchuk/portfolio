//Project Files
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList({viewProject}) {
  return (
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => viewProject(project)}
          />
        ))}
      </div>
  );
}
