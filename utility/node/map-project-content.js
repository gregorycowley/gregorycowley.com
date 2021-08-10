const fs = require("fs");
const path = require("path");
const readline = require("readline");
const matter = require("gray-matter");

const pathToMap =
  "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/utility/project-map.csv";
const projectTemplate =
  "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/utility/project-template.txt";
const pathToContent =
  "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/";
// const mapfile = fs.readFileSync(pathToMap, "utf-8");

let rl = readline.createInterface({
  input: fs.createReadStream(pathToMap)
});

let lineNum = 0;

rl.on("line", line => {
  lineNum++;
  const [projectFile, project] = line.split(",");
  // console.log(projectFile, project);
  if (projectFile === "null") {
    return;
  } else if (project === "null") {
    return;
  } else {
    const pathToMD = path.join(pathToContent, "projects", projectFile);
    try {
      if (fs.existsSync(pathToMD)) {
        // console.log(matter(fs.readFileSync(pathToMD, "utf-8")));
      } else {
        // console.log(pathToMD)
        const template = matter( fs.readFileSync(projectTemplate, "utf-8"));
        template.data.imageSourceDirName = project;
        fs.writeFileSync(pathToMD, matter.stringify(template) ); 
        console.log(template)
      }
    } catch (err) {
      console.error(err);
      // Create a new files using the project-template.txt
      
    }
  }
});

rl.on("close", line => {
  console.log("Finished. Total lines :: ", lineNum);
});
