const fs = require("fs");
const path = require("path");
const readline = require("readline");

const config = require("../config");

const projectRoot = config.projectRoot;
const projects = path.join(projectRoot, config.projectsPath);

const pathToMap = path.join(__dirname,"../data/website-content.tsv");

let count = 0;
let keys = 0;
let output = "";

let rl = readline.createInterface({ input: fs.createReadStream(pathToMap)});

rl.on("line", line => {
    if ( count === 0 ) {
        keys = line.split("\t");
    }
    count++;

    const items = line.split("\t");
    let title;
    let subtitle;
    let description;
    let details = "";


    for (let i = 0; i < keys.length; i++){
        if (keys[i] === 'title'){
            title = `# ${items[i]}\n\n`;
        } else if ( keys[i] === "subtitle"){
            subtitle = `*${items[i]}*\n\n`;
            // output += `*${items[i]}*\n\n`;
        } else if ( keys[i] === "content"){
            content = `${items[i]}\n\n`;
            // output += `*${items[i]}*\n\n`;
        } else if ( keys[i] === "description"){
            description = `${items[i]}\n\n`;
            // output += `${items[i]}\n\n`;
        } else if ( keys[i] === "client"){
            details += `Client: ${items[i]}\n`;
        } else if ( keys[i] === "firm"){
            details += `Firm: ${items[i]}\n`;
        } else if ( keys[i] === "discipline"){
            details += `Discipline: ${items[i]}\n`;
        } else if ( keys[i] === "category"){
            details += `Category: ${items[i]}\n\n`;
        } else if ( keys[i] === "project_type"){
            details += `Project Type: ${items[i]}\n\n`;
        }
    }

    output += (title + subtitle + description.replace(/(\s\s|\u2028)/g, '\n\n')  + details + "\n---\nOptional Content:\n" + content.replace(/(\s\s|\u2028)/g, '\n\n') + "\n---\n\n\n\n");

});

rl.on("close", line => {
    // console.log("Finished. Total Lines: ", count);
    try {
        fs.writeFileSync(path.join(__dirname, "../data/content-all.md"), output);
        //file written successfully
      } catch (err) {
        console.error(err)
      }

});

