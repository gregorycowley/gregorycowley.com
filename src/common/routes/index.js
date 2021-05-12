import projects from "pages/Projects/projects";
import experiments from "pages/Experiments/experiments";
// import jobs from "pages/Jobs/jobs";

const projectsSlugs = projects.map((d) => d.slug).join("|");
// const jobsSlugs = jobs.map((d) => d.slug).join("|");
const experimentsSlugs = experiments.map((d) => d.slug).join("|");

const PATH = {
  LANG: ":lang(en|fr)",
};

const ROUTES = {
  HOME: {
    LABEL: {
      FR: "Accueil",
      EN: "Home",
    },
    IS_EXACT: true,
    PATH: "",
    SLUG_INDEX: "",
  },
  // PROJECTS: {
  //   LABEL: {
  //     FR: "Projets",
  //     EN: "Projects",
  //   },
  //   PATH: "projects",
  //   SLUG_INDEX: "projects",
  // },
  // PROJECT: {
  //   PATH: `projects/:projectSlug(${projectsSlugs})`,
  //   SLUG_INDEX: "projects",
  // },
  // EXPERIMENTS: {
  //   LABEL: {
  //     FR: "ExpÃ©rimentations",
  //     EN: "Experiments",
  //   },
  //   PATH: "experiments",
  //   SLUG_INDEX: "experiments",
  // },
  // EXPERIMENT: {
  //   PATH: `experiments/:experimentSlug(${experimentsSlugs})`,
  //   SLUG_INDEX: "experiments",
  // },
  // ABOUT: {
  //   LABEL: {
  //     FR: "Ã€ propos",
  //     EN: "About",
  //   },
  //   PATH: "about",
  //   SLUG_INDEX: "about",
  // },
  // SERVICES: {
  //   LABEL: {
  //     FR: "Services",
  //     EN: "Services",
  //   },
  //   PATH: "services",
  //   SLUG_INDEX: "services",
  // },
  // CONTACT: {
  //   LABEL: {
  //     FR: "Contact",
  //     EN: "Contact",
  //   },
  //   PATH: "contact",
  //   SLUG_INDEX: "contact",
  // },
  // STORIES: {
  //   IS_EXTERNAL: true,
  //   LABEL: {
  //     FR: "Articles",
  //     EN: "Stories",
  //   },
  //   SLUG_INDEX: {
  //     FR: "https://medium.com/dataveyes-stories-vf",
  //     EN: "https://stories.dataveyes.com",
  //   },
  // },
  // // PRESSKIT: {
  // //   LABEL: {
  // //     FR: 'Kit presse',
  // //     EN: 'Press Kit'
  // //   },
  // //   PATH: 'presskit',
  // //   SLUG_INDEX: 'presskit'
  // // },
  // GUIDELINES: {
  //   LABEL: {
  //     FR: "Guide pour votre projet",
  //     EN: "Guidelines for your project",
  //   },
  //   PATH: "guidelines",
  //   SLUG_INDEX: "guidelines",
  // },
  // TERMS: {
  //   LABEL: {
  //     FR: "Mentions lÃ©gales",
  //     EN: "Terms & conditions",
  //   },
  //   PATH: "terms-and-conditions",
  //   SLUG_INDEX: "terms-and-conditions",
  // },
  NOT_FOUND: {
    PATH: "404",
  },
};

export { PATH };
export default ROUTES;
