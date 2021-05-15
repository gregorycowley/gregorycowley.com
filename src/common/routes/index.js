import projects from "pages/Projects/projects";
import experiments from "pages/Experiments/experiments";

const projectsSlugs = projects.map((d) => d.slug).join("|");
const experimentsSlugs = experiments.map((d) => d.slug).join("|");

const ROUTES = {
  HOME: {
    LABEL: "Home",
    IS_EXACT: true,
    PATH: "",
    SLUG_INDEX: "",
  },
  PROJECTS: {
    LABEL: "Projects",
    PATH: "projects",
    SLUG_INDEX: "projects",
  },
  PROJECT: {
    PATH: `projects/:projectSlug(${projectsSlugs})`,
    SLUG_INDEX: "projects",
  },
  EXPERIMENTS: {
    LABEL: "Experiments",
    PATH: "experiments",
    SLUG_INDEX: "experiments",
  },
  EXPERIMENT: {
    PATH: `experiments/:experimentSlug(${experimentsSlugs})`,
    SLUG_INDEX: "experiments",
  },
  ABOUT: {
    LABEL: "About",
    PATH: "about",
    SLUG_INDEX: "about",
  },
  SERVICES: {
    LABEL: "Services",
    PATH: "services",
    SLUG_INDEX: "services",
  },
  CONTACT: {
    LABEL: "Contact",
    PATH: "contact",
    SLUG_INDEX: "contact",
  },
  STORIES: {
    IS_EXTERNAL: true,
    LABEL: "Stories",
    SLUG_INDEX: "https://stories.dataveyes.com",
  },
  PRESSKIT: {
    LABEL: 'Press Kit',
    PATH: 'presskit',
    SLUG_INDEX: 'presskit'
  },
  GUIDELINES: {
    LABEL: "Guidelines for your project",
    PATH: "guidelines",
    SLUG_INDEX: "guidelines",
  },
  TERMS: {
    LABEL: "Terms & conditions",
    PATH: "terms-and-conditions",
    SLUG_INDEX: "terms-and-conditions",
  },
  NOT_FOUND: {
    PATH: "404",
  },
};

export default ROUTES;
