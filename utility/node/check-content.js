const fs = require( "fs" );
const path = require("path");
const readline = require("readline");
const matter = require("gray-matter");

const pathToContent = "../content/projects";
const absPath = path.join(__dirname, pathToContent);

const frontmatterTemplate = fs.readFileSync(path.join(__dirname, "project-template.txt"), "utf-8");
const dataTemplate = matter(frontmatterTemplate);

try {
    const contents = fs.readdirSync(absPath);

    contents.forEach(
        filename => {

            const filepath = path.join(absPath, filename);
            const fileContents = fs.readFileSync(filepath, "utf-8");
            const parsedContents = matter(fileContents);
            const fileKeys = Object.keys(parsedContents.data);

            Object.keys(dataTemplate.data).forEach (
                key => {
                    // console.log(key);
                    if ( ! fileKeys.includes(key) ){
                        parsedContents.data[key] = dataTemplate.data[key];
                    }
                }
            );

            const projectDir = path.parse(parsedContents.data["hero_image"])["dir"].split("/").pop()

            parsedContents.data["image_source_dir_name"] = projectDir;
            parsedContents.data["image_path"] = `/projects/${projectDir}`;
            parsedContents.data["status"] = "draft";
            parsedContents.data["author"] = "Gregory Cowley"

            let ordered = {};
            Object.keys(parsedContents.data).sort().forEach(
                key => {
                    if ( ! ["categoryAlt", "imageSourceDirName", "projecttype"].includes(key) ){
                        ordered[key] = parsedContents.data[key];
                    }
                }
            )
            let sortedContents = parsedContents;
            sortedContents.data = ordered;

            fs.writeFileSync(filepath, matter.stringify(sortedContents), "utf-8");
        }
    );
  
} catch (e) {
    console.log(e);
}
