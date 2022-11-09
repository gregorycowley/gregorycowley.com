const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const glob = require("glob");

const pathToContent = path.join(__dirname, "../content");
const files = glob.sync (`${pathToContent}/**/*.md`);


// const content = path.join(__dirname, "../content");
const output = path.join(__dirname, "../data/all-content.json");

let objs = [];

const makeContentObj = filepath => {
  const obj = {};
  const parts = path.parse(filepath);
  let item = readFrontmatter(filepath);
  item["path"] = filepath;
  obj[`${parts.name}`] = item;
  return obj;
};

const walkFiles = ( filelist ) => {
  let fileObjs = []
  filelist.forEach(
    filepath => {
      fileObjs.push(makeContentObj(filepath));
    }
  );
  return fileObjs;
}

// const walk = (dir, callback) => {
//   const items = fs.readdirSync(dir);
//   items.forEach(file => {
//     var filepath = path.join(dir, file);
//     const stat = fs.statSync(filepath);
//     if (stat.isDirectory()) {
//       // console.log("Directory");
//       return walk(filepath, callback);
//     } else if (stat.isFile()) {
//       if (filepath.includes(".md")) {
//         objs.push(callback(filepath));
//       }
//     }
//   });
//   return objs;
// };

const readFrontmatter = filepath => {
  const content = fs.readFileSync(filepath, "utf8");
  const metadata = matter(content);
  return metadata.data;
};

let siteContent = walkFiles(files);

fs.writeFile(output, JSON.stringify(siteContent, null, 4), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + output);
  }
});
