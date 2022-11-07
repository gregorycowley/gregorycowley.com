const fs = require("fs");
const path = require("path");

const jsonfile = "../data/all-content.json";
const outputFile = "../data/content.csv";

const jsondata = JSON.parse(fs.readFileSync(jsonfile));

// console.log(jsondata[20]);

jsondata.forEach( ( item ) => {
    let output = "";
    const name = Object.keys( item ) || "";
    // console.log(item[name]);
    output += `"${name}",`;
    Object.values(item[name]).forEach((subitem) => {
        if (typeof subitem === 'string' || subitem instanceof String){
            output += `${JSON.stringify(subitem)},`;
        } else {  
            output += `${JSON.stringify(subitem)},`;
        }
    })
    console.log('--------------', output);

    fs.appendFileSync(outputFile, output + "\n");
});
