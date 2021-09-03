export default function TechItem({ id, item: { name, imgSrc } }) {
  const imageSrc = require(`../assets/images/techs/${imgSrc}`).default;

  return (
    <li key={id} className="tech-item">
      <img src={imageSrc} alt="" />
      <p>{name}</p>
    </li>
  );
}
