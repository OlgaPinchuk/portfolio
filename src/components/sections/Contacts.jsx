//Project files
import ContactsList from "../ContactsList";
import Footer from "../Footer";
import { contactsSection } from "../../data/pageSections.json";

export default function Contacts() {
  const { title, description } = contactsSection;
  return (
    <section className="page-section flex-column contact" id="contact">
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
      <div className="contacts-section">
        <ContactsList />
      </div>
      <Footer />
    </section>
  );
}
