//Project files
import List from "./List";
import TechItem from "./TechItem";
import { technologies } from "../data/technologies";

export default function TechList() {
  return (
    <div className="tech-list">
      <List list={technologies} Component={TechItem}/>
    </div>
  );
}
