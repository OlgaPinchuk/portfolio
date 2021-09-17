// Project files
import ContactsList from "../ContactsList";
import Footer from "../Footer";
import { contacts } from "../../data/pageSections.json";

export default function Contacts() {
  const { title, description } = contacts;
  return (
    <section className="page-section flex-column contact" id="contact">
      <h2 className="section-title">{title}</h2>
      <div className="descriptions">
        <p>{description}</p>
      </div>
      <div className="contacts-section">
        <ContactsList />
      </div>
      <Footer />
    </section>
  );
}
