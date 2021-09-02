//Project files
import Menu from "./components/Menu";
import Layout from "./components/Layout";

export default function App() {
  return (
    <article className="App">
      <Menu />
      <main className="main-content">
        <Layout />
      </main>
    </article>
  );
}
