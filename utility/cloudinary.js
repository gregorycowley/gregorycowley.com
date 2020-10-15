
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary");
const dotenv = require('dotenv');
const glob = require("glob");

let cloudContents = {};

dotenv.config({path:__dirname+'/../.env'});

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
    result.then(data => {
        return data.resources.map( 
            obj => {
                return { 
                    asset_id: obj.asset_id, 
                    public_id: obj.public_id, 
                    format: obj.format
                }
            }
        )
    } 
    ).then( uploads => parseLocalPath(uploads));
};

const logContents = async () => {
    let promise = new Promise ( 
        ( resolve, reject ) => {
            cloudinary.v2.api.resources(
                { 
                    type: 'upload',
                    max_results: 1000
                }, 
                function(error, result) {
                    if (error) reject(error);
                    resolve(result)
                }
            )
        }
    )
    let result = await promise;
    return result;
}

const parseLocalPath = ( uploads ) => {
    
    uploads.forEach ( obj => {
        try {
            const elements = path.parse(obj.public_id);
            const uniqueId = elements.name.split("_").pop();
            const localPath = path.join(__dirname, "../_cloudinary", elements.dir, elements.name.replace( `_${uniqueId}`, "." + obj.format ) )
            console.log(localPath)
        } catch (e) {
            console.log(
                "Error: ", e
            )
        }
    })
    //return uniqueId.pop() || "";
}

buildUploadList();





// fs.writeFileSync("../data/cloud.json", JSON.stringify(result, null, 4));

const unploadContent = ( filepath, public_id ) => {
    cloudinary.v2.uploader.upload(
        filepath, 
        { 
            public_id: public_id
        },
        function(error, result) {
            console.log(result, error); 
        }
    );

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

const loadMarkdown = ( filepath ) => {

};

const loadLocalImages = ( filepath ) => {

};