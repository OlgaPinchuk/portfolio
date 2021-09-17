// Project files
import TechList from "../TechList";
import { technologies } from "../../data/pageSections.json";

export default function Technologies() {
  const { title, description } = technologies;

  return (
    <section className="page-section tech" id="tech">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="descriptions">
          <p>{description}</p>
        </div>
        <TechList />
      </div>
    </section>
  );
}
