import logo from "../assets/images/logo.png";

export default function NavLink({ id, item: { name, isImage } }) {
  return (
    <li key={id} className={`nav-item ${name}-item`}>
      <a href={`#${name}`}>
        {isImage ? (
          <img className="logo" src={logo} alt="Logo" />
        ) : (
          name.toUpperCase()
        )}
      </a>
    </li>
  );
}
