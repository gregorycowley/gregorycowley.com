const fs = require("fs");
const path = require("path");
const readline = require("readline");
const matter = require("gray-matter");
const yaml = require("js-yaml");
const glob = require("glob");

const inputdir = path.join(__dirname, "../input");
const outputdir = path.join(__dirname, "../output");
const projectdir = path.join(__dirname, "../../src/content/projects");

const process = () => {
	const destinationData = {};
	glob("**/*.md", { cwd: projectdir }, (err, files) => {
		if (err) console.log(err);
		files.forEach((file) => {
			const fileData = path.parse(file);
			destinationData[fileData.name] = fileData;
		});
		// console.log(destinationData["wantedsanta"]);

		output(destinationData);
	});
};

const output = (destinationData) => {
	glob("*.yml", { cwd: outputdir }, (err, files) => {
		if (err) console.log(err);
		files.forEach((filename) => {
			fs.createReadStream(path.join(outputdir, filename))
				.on("error", () => {
					console.log("Error");
				})
				.setEncoding("utf-8")
				.on("data", (contents) => {
					// contents = contents.slice(0);
					// console.log(contents.trim());

					const yamlObj = yaml.load(contents);
					try {
						const filedata = destinationData[yamlObj.filename];
						beheadMd(
							path.join(projectdir, filedata.dir, filedata.name + filedata.ext),
							yaml.dump(contents, {
								schema: yaml.JSON_SCHEMA,
								flowLevel: 0,
								// noArrayIndent: true,
							})
						);
						// fs.writeFileSync(filename, yaml.stringify());
						// filehandle.writeFile(data, options);
					} catch (e) {
					
                        console.log("Error: ", e);
					}
				})
				.on("end", () => {});
		});
	});
};

const beheadMd = (filepath, newHead) => {
	fs.createReadStream(filepath)
		.on("error", () => {
			console.log("ERROR");
		})
		.setEncoding("utf-8")
		.on("data", (contents) => {
			const theRest = contents.slice(contents.indexOf("---", 4));
			const newContent = `---\n${yaml.load(newHead)}\n${theRest}  `;
			// console.log(newContent);
			fs.writeFileSync(filepath, newContent);
		})
		.on("end", () => {});

	// console.log(yaml.load(fs.readFileSync(filepath, 'utf8')));
};

process();
