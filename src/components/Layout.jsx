//Project files
import List from "./List";
import PageSection from "./PageSection";
import { pageSections } from "../data/pageSections";

export default function Layout() {
  return <List list={pageSections} Component={PageSection} />;
}
