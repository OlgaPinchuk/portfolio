//Project files
import { pageSections } from "../data/pageSections";
import List from "./List";
import NavLink from "./NavLink";

export default function NavigationBar() {
  return (
    <nav className="nav-bar">
      <List list={pageSections} Component={NavLink} />
    </nav>
  );
}
