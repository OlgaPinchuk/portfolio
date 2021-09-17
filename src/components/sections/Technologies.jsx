// Project files
import TechList from "../TechList";
import { technologies } from "../../data/pageSections.json";

export default function Projects() {
  const { title, description } = technologies;

  return (
    <section className="page-section flex-column tech" id="tech">
      <h2 className="section-title">{title}</h2>
      <div className="descriptions">
        <p>{description}</p>
      </div>
      <TechList />
    </section>
  );
}
