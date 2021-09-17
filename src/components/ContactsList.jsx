// Project files
import List from "./common/List";
import ContactItem from "./ContactItem";
import { contactInfo } from "../data/contacts.json";

export default function ContactsList() {
  return <List list={contactInfo} Component={ContactItem} />;
}
