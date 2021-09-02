import { technologies } from "../data/data";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function TechList() {
  return (
    <ul>
      {technologies.map((item, index) => (
        <li key={index} className="tech-item">
          {/* <FontAwesomeIcon icon={faHome}/> */}
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
