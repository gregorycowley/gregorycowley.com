const fs = require("fs");
const path = require("path");
const glob = require("glob");
const csv = require("csv-parser");
const { forEach } = require("lodash");
const YAML = require("json2yaml");

const inputdir = path.join(__dirname, "../input");
const outputdir = path.join(__dirname, "../output");

const clean = () => {
    glob("*.json", { cwd: outputdir }, function (er, files) {
        files.forEach((file) => {
            try {
                fs.unlinkSync(path.join(outputdir, file));
            } catch (err) {
                console.error(err);
            }
        });
    });
}

clean();

const process = () => {
    glob("*.tsv", { cwd: inputdir }, function (er, files) {
        const results = [];
        files.forEach((file) => {
            fs.createReadStream(path.join(inputdir, file))
                .pipe(csv({ separator: "\t" }))
                .on("data", (data) => results.push(data))
                .on("end", () => {
                    console.log(results.length);
                    results.forEach((jsonData) => {
                        fs.writeFileSync(
                            path.join(outputdir, `${jsonData.slug}.json`),
                            JSON.stringify(jsonData, null, 2)
                        );
                    });
                });
        });
    });
}

process();
