//Project files
import { pageSections } from "../data/data";
import logo from "../assets/images/logo.png";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        {pageSections.map(({ id, name, isImage }) => (
          <li key={id} className={`menu-item ${name}-item`}>
            <a href={`#${name}`}>{isImage ? <img className="logo" src={logo} alt="Logo" /> : name.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
