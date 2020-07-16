const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { resolve } = require("path");

const pages = "../pages";
const content = "../content";
const output = "../data/all-content.json";

// let outputjson = {"pages":[]};
let objs = [];

const makeContentObj = ( filepath ) => {
    const obj = {};
    const parts = path.parse(filepath);
    let item = readFrontmatter(filepath);
    item["path"] = filepath;
    obj[`${parts.name}`] = item;
    
    return obj;
}

const walk = (dir, callback) => {
    const items = fs.readdirSync(dir);
    items.forEach( (file) => {
        var filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            // console.log("Directory");
            return walk(filepath, callback);
        } else if (stat.isFile()) {
            // console.log("File");
            objs.push( callback(filepath) );
        }
    });
    return objs;
}

const readFrontmatter = filepath => {
  const content = fs.readFileSync(filepath, "utf8");
  const metadata = matter(content);
  return metadata.data;
};

let siteContent = walk(content, makeContentObj);

// console.log(JSON.stringify(proms));


fs.writeFile(output, JSON.stringify(siteContent, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + output);
    }
});
