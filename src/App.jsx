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
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Technologies from "./components/sections/Technologies";
import Contacts from "./components/sections/Contacts";

library.add(faEnvelope, faPhone, faMapMarkerAlt, faLinkedin, faGit);

export default function App() {
  return (
    <article className="App">
      <NavigationBar />
      <section className="main">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contacts />
      </section>
    </article>
  );
}
