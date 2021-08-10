// const fs = require("fs");
const path = require("path");

const config = {
	projectRoot: path.join(__dirname, "../"),
	projectsPath: "src/content/projects/",
	discplinesPath: "src/content/diciplines/",
	resumePath: "src/content/resume/",
	sidebarsPath: "src/content/sidebars/",
	skilsPath: "src/content/skills/",
	dataPath: "src/common/data/",
};

module.exports = config;