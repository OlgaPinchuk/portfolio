//Project files
import { pageSections } from "../data/pageSections";
import logo from "../assets/images/logo.png";

export default function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul>
        {pageSections.map(({ id, name, isImage }) => (
          <li key={id} className={`nav-item ${name}-item`}>
            <a href={`#${name}`}>{isImage ? <img className="logo" src={logo} alt="Logo" /> : name.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
