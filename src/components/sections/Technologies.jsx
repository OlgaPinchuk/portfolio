// Project files
import { technologiesSection } from "../../data/pageSections.json";
import TechList from "../TechList";

export default function Projects() {
  const { title, description } = technologiesSection;

  return (
    <section className="page-section flex-column tech" id="tech">
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
      <TechList />
    </section>
  );
}
