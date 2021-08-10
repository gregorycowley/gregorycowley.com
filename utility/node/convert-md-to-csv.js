const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const readline = require("readline");

const config = require("../config.js");

const projectRoot = config.projectRoot;
const projectsPath = path.join(projectRoot, config.projectsPath);
const outputPath = path.join(projectRoot, "utility", "output");
const csvHeaders = matter(
	fs.readFileSync("../templates/project-template.txt", "utf-8")
).data;

const files = glob.sync(`${projectsPath}/**/*.md`);

let csvHeaderArray = [];
let csvDataArray = [];

// const useHeaders = false;

// if ( useHeaders ) {
//     let headers = "Filename,";
//     Object.keys(csvHeaders).forEach((key) => {
//         headers += `${key},`;
//     });
//     csvData += `${headers}\n`;

// } else {
files.forEach((filepath) => {
	const pathElements = path.parse(filepath);
	const content = fs.readFileSync(filepath, "utf-8");
	const contentArray = content.split("\n");

	console.log(contentArray.length);

	let start = false;

	let count = 0;

	let mode = "ready";
	let key = "";
	let value = "";
	let outputObj = {};
	let keyArray = [];
	let valueArray = [];

	contentArray.forEach((input) => {
		const trimmed = input.trim();

		// console.log(mode, input);

		if (input.trim() == "---") {
			if (mode == "ready") {
				mode = "yaml";
			} else {
				mode = "finished";
			}
		}

		if (mode == "yaml") {
			const inputArray = trimmed.split(":");
			if (inputArray.length > 1 && inputArray[0].length < 30) {
				// console.log(inputArray[0] + " Is a Key" );
				key = inputArray.shift();
			}
			value = inputArray.join("; ");
			if (outputObj[key] != undefined) {
				outputObj[key] = outputObj[key] + "++" + value.trim();
			} else {
				outputObj[key] = value.trim();
			}
		}
	});

	for (const [objKey, objValue] of Object.entries(outputObj)) {
		keyArray.push(objKey);
		valueArray.push(objValue);
	}

	// outputObj = outputObj.join("\t");
	fs.appendFileSync(
		path.join(outputPath, "all-md-content.csv"),
		keyArray.join("\t") + "\n"
	);
	fs.appendFileSync(
		path.join(outputPath, "all-md-content.csv"),
		valueArray.join("\t") + "\n"
	);

	// const dataObj = matter(content);
	// console.log(dataObj);
	// let entry = `${pathElements.name},`;
	// Object.keys(csvHeaders).forEach((key) => {
	//     entry += `"${dataObj.data[key]}",`;
	// });
	// csvData += `${entry}\n`;
});

// }

// fs.writeFileSync(path.join(outputPath, "all-md-content.csv"), csvData);
