//Project files
import PageSection from "./PageSection";
import { pageSections } from "../data/data";

export default function Layout() {
  return (
    <>
      {pageSections.map((section) => (
        <PageSection key={section.id} item={section}>
        </PageSection>
      ))}
    </>
  );
}
