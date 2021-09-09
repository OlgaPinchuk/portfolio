//Project files
import aboutPicture from "../assets/images/aboutPicture.png";

// This component is weird it only has an image, the title and description could be here.
export default function AboutDetails() {
  return (
    <img
      className="about-picture"
      src={aboutPicture}
      alt="About illustration"
    />
  );
}
