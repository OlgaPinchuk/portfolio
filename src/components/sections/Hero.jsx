//Project files
import { hero } from "../../data/pageSections.json";

export default function Hero() {
  const { title } = hero;
  return (
    <section className="page-section flex-column hero" id="hero">
      <h2 className="section-title">{title}</h2>
    </section>
  );
}
