// NPM Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Link from "./common/Link";

export default function ContactItem({ item: { name, icon, href } }) {
  return (
    <li className="contact-list-item">
      <Link href={href}>
        <FontAwesomeIcon icon={icon} />
        <span>{name}</span>
      </Link>
    </li>
  );
}
