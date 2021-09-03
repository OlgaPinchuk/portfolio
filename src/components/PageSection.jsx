export default function PageSection({ item }) {
  const { title, name, description, component: Component } = item;

  return (
    <section className={`layout flex-column ${name}`} id={name}>
      <h2 className="section-title">{title}</h2>
      <div className="descriptions">
        {Array.isArray(description) ? (
          description.map((desc, index) => <p key={index}>{desc}</p>)
        ) : (
          <p>{description}</p>
        )}
      </div>

      <div className="main">{Component && <Component />}</div>
    </section>
  );
}
