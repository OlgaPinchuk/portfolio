// Npm files
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGit } from "@fortawesome/free-brands-svg-icons";

// Project files
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";

library.add(faEnvelope, faPhone, faMapMarkerAlt, faLinkedin, faGit);

export default function App() {
  return (
    <article className="App">
      <NavigationBar />
      <Layout />
    </article>
  );
}
