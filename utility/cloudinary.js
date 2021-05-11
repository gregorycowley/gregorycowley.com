const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const glob = require("glob");

let cloudContents = {};

const localPath =
  "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/_cloudinary/_Projects";

dotenv.config({ path: __dirname + "/../.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// cloudinary.v2.api.resources(
//     function(error, result) {
//         console.log(result, error);
//     }
// );

const buildUploadList = () => {
  let result = logContents();
  result
    .then(data => {
      return data.resources.map(obj => {
        return {
          asset_id: obj.asset_id,
          public_id: obj.public_id,
          format: obj.format
        };
      });
    })
    .then(uploads => parseLocalPath(uploads));
};

const logContents = async () => {
  let promise = new Promise((resolve, reject) => {
    cloudinary.v2.api.resources(
      {
        type: "upload",
        max_results: 1000
      },
      function(error, result) {
        if (error) reject(error);
        resolve(result);
      }
    );
  });
  let result = await promise;
  return result;
};

const parseLocalPath = uploads => {
  uploads.forEach(obj => {
    // console.log(obj);
    try {
      const elements = path.parse(obj.public_id);
      const uniqueId = elements.name.split("_").pop();
      // const localPath = path.join(__dirname, "../_cloudinary", elements.dir, elements.name.replace( `_${uniqueId}`, "." + obj.format ) )
      const localPath = path.join(
        __dirname,
        "../_cloudinary",
        elements.dir,
        elements.name.replace(`_${uniqueId}`, "." + obj.format)
      );

      console.log("Unique ID :: ", uniqueId);
      if (uniqueId) {
        unploadContent(localPath, obj.public_id);
      } else {
        console.log(localPath);
        unploadContent(localPath, false);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  });
  //return uniqueId.pop() || "";
};

// buildUploadList();
const listLocalFiles = async () => {
  const subfolder = "projects";
  const localPath = path.join(__dirname, "../_cloudinary", subfolder);
  let files = [];

  async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
      const entry = path.join(dir, d.name);
      if (d.isDirectory()) yield* await walk(entry);
      else if (d.isFile()) yield entry;
    }
  }

  for await (const p of walk(localPath)) {
    files.push(p.replace(path.join(__dirname, "../_cloudinary/"), ""));
  }

  return files;
};

const search = data => {
  // console.log("Searching...");
  data.forEach(pathitem => {
    const pathelements = path.parse(pathitem);
    const filename = path.join(pathelements.dir, pathelements.name);
    //
    try {
      console.log("Searching for: ", `public_id:${filename}*`);
      cloudinary.v2.search
        .expression(`resource_type:image AND public_id:${filename}*`)
        .max_results(1)
        .execute()
        .then(result => console.log("Found:", result));
    } catch (e) {
      console.log(e);
    }
  });
};

const upload = (data) => {
  data.forEach( item => {
    itemElements = path.parse(item);
    // console.log(path.parse(item));
    cloudinary.v2.uploader.upload(
      path.join(__dirname, '../_cloudinary', itemElements.dir, itemElements.base),
      {
        folder: itemElements.dir,
        public_id: itemElements.name,
        invalidate: true
      },
      function(error, result) {
        console.log(result, error);
      }
    );
  });
};

// listLocalFiles().then(data => upload(data));



// ( result )  => {
//   console.log(result)
//   // if (result.total_count === 0){
//   //   console.log("Not uploaded: ", filename);
//   //   // unploadContent(path.join(__dirname, "../_cloudinary", filename), '');
//   // }
// });

logContents().then( result => fs.writeFileSync(path.join(__dirname, "../data/cloud.json"), JSON.stringify(result, null, 4)));

const uploadContent = (filepath, public_id) => {
  if (public_id) {
    // cloudinary.v2.uploader.upload(
    //   filepath,
    //   {
    //     public_id: public_id
    //   },
    //   function(error, result) {
    //     console.log(result, error);
    //   }
    // );
    cloudinary.v2.uploader.upload(
      "sample.jpg",
      {
        folder: "my_folder/my_sub_folder/",
        public_id: "my_name"
      },
      function(error, result) {
        console.log(result, error);
      }
    );
  } else {
    console.log("New Upload:::", filepath);
    cloudinary.v2.uploader.upload(filepath, function(error, result) {
      console.log(result, error);
    });
  }
};

/*

    Update content from Cloudinary:

    - Projects
    - Project Name
    - Filename
    - Map Project Name to md file. I there is a reason to keep them different.
    - Objects: {
        public_id:
        ProjectName:
        MD_Filepath:
        TopImages:
        LeftImages:
        RightImages:
    }

    Parse the public ID
    public_id.split("/")
    folder
    project
    filename
    filename.split("-");


    {
      asset_id: '369b8faa7ff4f9f266fe7b7c114d5771',
      public_id: 'projects/HPGarage/HPGarage-right-138_yxuibz',
      format: 'png',
      version: 1600396872,
      resource_type: 'image',
      type: 'upload',
      created_at: '2020-09-18T02:41:12Z',
      bytes: 199855,
      width: 1501,
      height: 1001,
      url: 'http://res.cloudinary.com/dxgzx2apo/image/upload/v1600396872/projects/HPGarage/HPGarage-right-138_yxuibz.png',
      secure_url: 'https://res.cloudinary.com/dxgzx2apo/image/upload/v1600396872/projects/HPGarage/HPGarage-right-138_yxuibz.png'
    },

*/

const loadMarkdown = filepath => {};

const loadLocalImages = filepath => {};
