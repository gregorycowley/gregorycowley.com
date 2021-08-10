const fs = require("fs");
const path = require("path");
const homedir = require("os").homedir();
const glob = require("glob");

const downloaddir = path.join (homedir, "Downloads");
const localdir = path.join(__dirname, "../input");

// options is optional
glob( "*.tsv", {cwd: downloaddir}, function (er, files) {
	// files is an array of filenames.
	// If the `nonull` option is set, and nothing
	// was found, then files is ["**/*.js"]
	// er is an error object or null.
    files.forEach(
        file => {
            fs.copyFileSync(path.join(downloaddir, file), path.join( localdir, file) );
        }
    )
    console.log ("Copying: ", files);
    // 
});

