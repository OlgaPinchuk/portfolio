//NPM files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project files
import Link from "./Link";
import { contactLinks } from "../data/contacts";

export default function Footer() {
  const socialMedia = contactLinks.map((link) => {
    return (
      <Link href={link.href} key={link.id}>
        <FontAwesomeIcon icon={link.icon} size="lg" />
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
