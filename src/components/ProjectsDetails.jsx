import Link from "./Link";
import List from "./List";

export default function ProjectsDetails({ project }) {
  const { title, screen, description, techs, git, hosting } = project;

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
        <div className="links primary">
          <Link href={hosting}>Visit website/app</Link>
          <Link href={git}>Git repository</Link>
        </div>
      </div>
    </div>
  );
}
