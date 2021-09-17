//Project files
import { heroSection } from "../../data/pageSections.json";

export default function Hero() {
  const { title } = heroSection;
  return (
    <section className="page-section flex-column hero" id="hero">
      <h2 className="section-title">{title}</h2>
    </section>
  );
}
