import About from "../components/About";
import ProjectsList from "../components/ProjectsList";
import TechList from "../components/TechList";
import ContactDetails from "../components/ContactDetails";

export const pageSections = [
  {
    id: 1,
    name: "hero",
    isImage: true,
    title: "Hi I’m Olga a junior frontend developer from Ukraine",
    description: "",
  },
  {
    id: 2,
    name: "about",
    title: "About me",
    description: [
      "Hi! I’m Olga, a junior frontend developer from Ukraine. This is my website, which I use to showcase everything I have developed.",
      "I specialize in React development with a minimalistic design and attention to details. Why do I need minimalistic design and attention to details, you might ask? Well, scroll down and let me convince you.",
    ],
    component: About,
  },
  {
    id: 3,
    name: "projects",
    title: "Projects",
    description:
      "Here are the projects I will be making during the Frontend course at Novare Potential.",
    component: ProjectsList,
  },
  {
    id: 4,
    name: "tech",
    title: "Technologies I use",
    description:
      "Here is the techology that I already know and also starting to learn.",
      component: TechList,
  },
  {
    id: 5,
    name: "contact",
    title: "Contact me",
    description:
      "Here is my contact information if you are interested in starting a collaboration.",
    component: ContactDetails,
  },
];

export const technologies = [
  "React",
  "Recoil.js",
  "TypeScript",
  "SASS",
  "Firebase Auth",
  "FireStore",
  "CloudStorage",
  "Jest",
  "Redux",
  "Java",
];
