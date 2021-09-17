// Project files
import pageSections from "../data/pageSections.json";
import List from "./common/List";
import NavLink from "./NavLink";

export default function NavigationBar() {
  const navItems = Object.values(pageSections);

  return (
    <nav className="nav-bar">
      <List list={navItems} Component={NavLink} />
    </nav>
  );
}
