const fs = require("fs");
const path = require("path");
const matter = require("gray-matter")

const src = "/Users/gregorycowley/Desktop/GCS All Projects - Project Main.tsv";
const outputDir = "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content";

try {
    // read contents of the file
    const data = fs.readFileSync(src, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
    
        const data = line.split("\t");
        const struct = {
            year: data[0],
            monthDay: data[1],
            categoryA: data[2],
            type: data[3],
            projectName: data[4],
            clientName: data[5],
            firm: data[6],
            autoSlug: data[7],
            slug: data[8],
            rootPath: data[9],
            projectPath: data[10],
            discipline: data[11],
            projecttype: data[12],
            status: data[13],
            date: data[14],
            subtitle: data[15],
            description: data[16],
            author: data[17],
            dateUpdated: data[18],
            heroImage: data[19],
            category: data[20],
            detailImages: data[21],
            pathToMd: data[22]
        };
        
    
        if (struct.pathToMd != "" ) {
            const path = struct.pathToMd.replace(/\.\.\/content/, outputDir);
            try {
                const content = fs.readFileSync(path, 'UTF-8');
                while (content.charCodeAt(0) === 10) content.slice(1);
                const yaml = matter(content);
                // console.log(yaml.data);

                const newYaml = {
                    slug: struct.slug,
                    title: struct.projectName,
                    subtitle: struct.subtitle,
                    description: struct.description,
                    date: struct.year + struct.monthDay,
                    client: struct.clientName,
                    firm: struct.firm,
                    author: struct.author,
                    status: struct.status,
                    hero_image: struct.heroImage,
                    category: struct.category,
                    categoryAlt: struct.categoryA,
                    discipline: struct.discipline,
                    projecttype: struct.projecttype,
                    type: struct.type,
                    detail_images: JSON.parse(struct.detailImages)
                };
                
                const newContent = matter.stringify( yaml.content, newYaml);

                // console.log(newContent);
                // console.log("-------------------");

                fs.writeFileSync(path, newContent); 
                // console.log("File written successfully\n"); 
                // console.log("The written has the following contents:"); 
                // console.log(fs.readFileSync("programming.txt", "utf8")); 

            } catch (err) {
                console.error(err);
            }
        }

    });
} catch (err) {
    console.error(err);
}