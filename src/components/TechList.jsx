import { technologies } from "../data/technologies";

export default function TechList() {
  return (
    <ul className="tech-list">
      {technologies.map((item, index) => {
        const imageSrc = require(`../assets/images/techs/${item.imgSrc}`).default;
        return (
        <li key={index} className="tech-item">
          <img src={imageSrc} alt=""/>
          <p>{item.name}</p>
        </li>
        )
      })}
    </ul>
  );
}
