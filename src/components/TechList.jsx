// Project files
import List from "./common/List";
import TechItem from "./TechItem";
import technologies from "../data/technologies.json";

export default function TechList() {
  return (
    <div className="tech-list">
      <List list={technologies} Component={TechItem} />
    </div>
  );
}
