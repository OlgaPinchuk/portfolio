export default function ProjectCard({ project, onClick }) {
  // Constants
  const { title, thumb, isLocked } = project;
  const imageSrc = require(`../assets/images/projects/thumbs/${thumb}`).default;

  return (
    <div
      className={`project-card ${isLocked ? "disabled" : ""}`}
      onClick={onClick}
    >
      <div className="disabled-overlay">
        <img className="project-thumb" src={imageSrc} alt="Project thumb" />
        {isLocked && <p className="disabled-project-title">Coming soon</p>}
      </div>
      <h3 className="project-title">{title}</h3>
    </div>
  );
}
