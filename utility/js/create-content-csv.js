const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const pathToContent = path.join(__dirname, "../content");

const files = glob.sync (`${pathToContent}/**/*.md`);

const csvHeaders = matter(fs.readFileSync(path.join(__dirname,"project-template.txt"), "utf-8")).data;
let csvData = "";
let headers = "Filename,";
Object.keys(csvHeaders).forEach ( key => {
    headers += `${key},`;
});
csvData += `${headers}\n`;

files.forEach ( filepath => {
    const pathElements = path.parse(filepath);
    const content = fs.readFileSync(filepath, "utf-8");
    const dataObj = matter(content);
    let entry = `${pathElements.name},`;
    Object.keys(csvHeaders).forEach( key =>{
        entry += `"${dataObj.data[key]}",`
    }
    );
    csvData += `${entry}\n`;
})

fs.writeFileSync(path.join(__dirname,'all-content.csv'), csvData);