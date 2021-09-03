//Project files
import PageSection from "./PageSection";
import { pageSections } from "../data/pageSections";

export default function Layout() {
  return (
    <>
      {pageSections.map((section) => (
        <PageSection key={section.id} item={section}/>
      ))}
    </>
  );
}
