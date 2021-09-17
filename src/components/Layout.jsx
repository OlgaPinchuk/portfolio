// Project files
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Technologies from "../sections/Technologies";
import Contacts from "../sections/Contacts";

export default function Layout({ setModal }) {
  return (
    <>
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies />
      <Contacts />
    </>
  );
}
