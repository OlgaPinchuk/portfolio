//Project files
import List from "./List";
import ContactItem from "./ContactItem";
import { contactInfo } from "../data/contacts";

export default function ContactDetails() {

  return (
    <section className="contacts-section">
      <List list={contactInfo} Component={ContactItem} />
    </section>
  );
}
