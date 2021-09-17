//Project files
import aboutPicture from "../../assets/images/aboutPicture.png";
import { about } from "../../data/pageSections.json";

export default function About() {
  const { title, description } = about;
  return (
    <section className="page-section flex-column about" id="about">
      <h2 className="section-title">{title}</h2>
      <div className="descriptions">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <img
        className="about-picture"
        src={aboutPicture}
        alt="About illustration"
      />
    </section>
  );
}
