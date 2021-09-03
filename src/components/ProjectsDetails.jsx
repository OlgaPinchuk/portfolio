export default function ProjectsDetails({ project }) {
  const { title, screen, description, techs, gitLink, hostingLink } = project;

  const imageSrc =
    require(`../assets/images/projects/screens/${screen}`).default;
  const pills = techs.map((item, index) => (
    <span className="pill" key={index}>
      {item}
    </span>
  ));

  return (
    <div className="project-details">
      <img className="default" src={imageSrc} alt="Project screenshot" />
      <div className="about-project">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="pills">{pills}</div>
        <div className="links">
          <a className="link primary" href={hostingLink}>
            Visit website/app
          </a>
          <a className="link secondary" href={gitLink}>
            Git repository
          </a>
        </div>
      </div>
    </div>
  );
}
