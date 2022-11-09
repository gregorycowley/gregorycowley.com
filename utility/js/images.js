const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const directory = "src_cowleystudios/public/images";
const imagesDirectory =
  "/Users/gregorycowley/Dropbox/PortfolioAssets/_Photography/Portraiture";

const cleanDir = () => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
};

const genImages = () => {
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) throw err;
    console.log(files);
    for (const file of files) {
      sharp(path.join(imagesDirectory, file))
        .toFormat("jpeg")
        .toFile(directory + "/" + path.basename(file))
        .then(info => {
          console.info(info);
        })
        .catch(err => {
          console.error(err);
        });

      sharp(path.join(imagesDirectory, file))
        .resize(800, 800, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .toFile(
          directory +
            "/" +
            path.basename(file.replace(/(\.[\w\d_-]+)$/i, "-800w$1"))
        )
        .then(info => {
          console.info(info);
        })
        .catch(err => {
          console.error(err);
        });

      sharp(path.join(imagesDirectory, file))
        .resize(400, 400, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .toFormat("jpeg")
        .toFile(
          directory +
            "/" +
            path.basename(file.replace(/(\.[\w\d_-]+)$/i, "-400w$1"))
        )
        .then(info => {
          console.info(info);
        })
        .catch(err => {
          console.error(err);
        });
    }
  });
};

cleanDir();
genImages();
