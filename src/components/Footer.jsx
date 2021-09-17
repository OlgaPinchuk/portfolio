// Npm files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Link from "./common/Link";
import { contactLinks } from "../data/contacts.json";

export default function Footer() {
  const socialMedia = contactLinks.map((link) => {
    return (
      <Link href={link.url} key={link.id}>
        <FontAwesomeIcon icon={["fab", `${link.icon}`]} size="lg" />
      </Link>
    );
  });

  return (
    <div className="footer">
      <div className="social-media">{socialMedia}</div>
      <div className="copyright">
        <p> © 2021 • Olga Pinchuk</p>
      </div>
    </div>
  );
}
