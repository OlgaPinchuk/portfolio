// NPM Packages
import { useState } from "react";

// Project files
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import Modal from "./components/common/Modal";
import "./scripts/icons.js";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <article className="App">
      <NavigationBar />
      <Layout setModal={setModal} />
      <Modal state={[modal, setModal]} />
    </article>
  );
}
