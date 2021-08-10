const fs = require("fs");
const path = require("path");
const glob = require("glob");
const csv = require("csv-parser");
// const YAML = require("json2yaml");
// const matter = require("gray-matter");
const yaml = require("js-yaml");
const _ = require("lodash");

const inputdir = path.join(__dirname, "../input");
const outputdir = path.join(__dirname, "../output");

const clean = () => {
	glob("*.yml", { cwd: outputdir }, function (er, files) {
		files.forEach((file) => {
			try {
				fs.unlinkSync(path.join(outputdir, file));
			} catch (err) {
				console.error(err);
			}
		});
	});
};

clean();

const process = () => {
	glob("*.tsv", { cwd: inputdir }, function (er, files) {
		const results = [];
		files.forEach((file) => {
			fs.createReadStream(path.join(inputdir, file))
				.pipe(csv({ separator: "\t" }))
				.on("data", (data) => results.push(data))
				.on("end", () => {
					results.forEach((jsonData) => {
						let newObject = {};
						for (const [keys, value] of Object.entries(jsonData)) {
							const keyArray = keys.split(":");
							// const trash = keyArray.shift();

							var object = {};
							keyArray.reduce(function (o, s, index, array) {
								if (index == array.length - 1){
									return (o[s] = value);
								} else {
									return (o[s] = {});
								}
							}, object);
							newObject = _.merge(newObject, object);
						};

						// const file = matter(JSON.stringify(newObject));
						// console.log(JSON.stringify({ data: newObject }, null, 2));

						const wrappedObject = { data: newObject };

						fs.writeFileSync(
							path.join(outputdir, `${newObject.slug}.yml`),
							yaml.dump(newObject)
						);
					});
				});
		});
	});
};

process();
