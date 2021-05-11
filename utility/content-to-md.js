const fs = require("fs");
const path = require("path");
const readline = require("readline");
const matter = require("gray-matter");
// const neatCsv = require('neat-csv');
const csvParser = require('csv-parse/lib/sync')
const csv = require('csv-parser');

const pathToMap = path.join(__dirname,"../data/website-content.csv");

fs.createReadStream(pathToMap)
    .on('error', () => {
        // handle error
    })

    .pipe(csv())
    .on('data', (items) => {
        const keys = Object.keys(items);
        // console.log(items)
        try{
            // let filename = items[keys.indexOf("Filename")];

            // let slug = items[keys.indexOf("slug")];

            // let title = items[keys.indexOf("title")];
            // let subtitle = items[keys.indexOf("subtitle")];
            // let description = items[keys.indexOf("description")];

            // let client = items[keys.indexOf("client")];
            // let firm = items[keys.indexOf("firm")];
            // let date = items[keys.indexOf("date")];
            // let category = items[keys.indexOf("category")];
            // let category_alt = items[keys.indexOf("category_alt")];
            // let discipline = items[keys.indexOf("discipline")];
            // let author = items[keys.indexOf("author")];
            // let status = items[keys.indexOf("status")];
            // let project_type = items[keys.indexOf("project_type")];
            // let type = items[keys.indexOf("type")];
            // let content = items[keys.indexOf("content")];
            // let image_source_dir_name = items[keys.indexOf("image_source_dir_name")];

            // let image_path = items[keys.indexOf("image_path")];
            // let hero_image = items[keys.indexOf("hero_image")];
            // let left_images = items[keys.indexOf("left_images")];
            // let right_images = items[keys.indexOf("right_images")];

            let filename = items["Filename"];

            let slug = items["slug"];

            let title = items["title"];
            let subtitle = items["subtitle"];
            let description = items["description"];

            let client = items["client"];
            let firm = items["firm"];
            let date = items["date"];
            let category = items["category"];
            let category_alt = items["category_alt"];
            let discipline = items["discipline"];
            let author = items["author"];
            let status = items["status"];
            let project_type = items["project_type"];
            let type = items["type"];
            let content = items["content"];
            let image_source_dir_name = items["image_source_dir_name"];

            let image_path = items["image_path"];
            let hero_image = items["hero_image"];
            let left_images = items["left_images"];
            let right_images = items["right_images"];

            const disciplines = ["artist","designer","educator","","engineer","entrepreneur","photographer"];
            let filepath;
            if (disciplines.includes(filename)){
                filepath = path.join(__dirname, "../content/disciplines", filename + ".md");

            }  else {
                filepath = path.join(__dirname, "../content/projects", filename + ".md");
            }
            console.log("Updating,",filepath);
            if( fs.existsSync(filepath) ){
                
                const fileContent = fs.readFileSync(filepath, "utf-8");
                let frontmatter = matter(fileContent);
                // console.log(frontmatter);
                frontmatter.data.slug = slug;
                frontmatter.data.client = client;
                frontmatter.data.firm = firm;
                frontmatter.data.status = status;
                frontmatter.data.date = date;
                frontmatter.data.title = title;
                frontmatter.data.subtitle = subtitle;
                frontmatter.data.description = description;
                frontmatter.data.category = category;
                frontmatter.data.discipline = discipline;

                frontmatter.data.author = author;
                frontmatter.data.project_type = project_type;


                

                frontmatter.content = (content != undefined) ? description + "\n\n%%%% %%%%\n" + content : description;

                fs.writeFileSync(filepath,frontmatter.stringify())
            }
        } catch (e) {
            console.log("Error: ", e);
        }
    })

    .on('end', () => {
        // handle end of CSV
    })








// let rl = readline.createInterface({
//     input: fs.createReadStream(pathToMap).pipe(csvParser()),
//     crlfDelay: Infinity
// });

// let count = 0;
// let keys = [];

// rl.on("data", line => {
//     if (count === 0){
//         // keys = neatCsv(line);
//         console.log(line);

//     } else {
        // const items = parseCsv(line, {
        //     columns: true,
        //     skip_empty_lines: true,
        //     escape: '\\'
        // })
        // try{
        //     let filename = items[keys.indexOf("Filename")];

        //     let slug = items[keys.indexOf("slug")];

        //     let title = items[keys.indexOf("title")];
        //     let subtitle = items[keys.indexOf("subtitle")];
        //     let description = items[keys.indexOf("description")];

        //     let client = items[keys.indexOf("client")];
        //     let firm = items[keys.indexOf("firm")];
        //     let date = items[keys.indexOf("date")];
        //     let category = items[keys.indexOf("category")];
        //     let category_alt = items[keys.indexOf("category_alt")];
        //     let discipline = items[keys.indexOf("discipline")];
        //     let author = items[keys.indexOf("author")];
        //     let status = items[keys.indexOf("status")];
        //     let project_type = items[keys.indexOf("project_type")];
        //     let type = items[keys.indexOf("type")];
        //     let content = items[keys.indexOf("content")];
        //     let image_source_dir_name = items[keys.indexOf("image_source_dir_name")];

        //     let image_path = items[keys.indexOf("image_path")];
        //     let hero_image = items[keys.indexOf("hero_image")];
        //     let left_images = items[keys.indexOf("left_images")];
        //     let right_images = items[keys.indexOf("right_images")];

        //     let filepath = path.join(__dirname, "../content/projects", filename + ".md");
        //     if( fs.existsSync(filepath) ){
        //         const fileContent = fs.readFileSync(filepath, "utf-8");
        //         let frontmatter = matter(fileContent);
        //         // console.log(frontmatter);

        //         frontmatter.data.client = client;
        //         frontmatter.data.firm = firm;
        //         frontmatter.data.status = status;
        //         frontmatter.data.date = date;
        //         frontmatter.data.subtitle = subtitle;
        //         frontmatter.data.description = description;

        //         frontmatter.content = content;

        //         fs.writeFileSync(filepath,frontmatter.stringify())
        //     }




        // } catch (e) {
        //     console.log("Error: ", e);
        // }

        
//     }
//     count++;
// });

// rl.on("close", 
//     line => {
//         console.log("finished");
//     }
// );