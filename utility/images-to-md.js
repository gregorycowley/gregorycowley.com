const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const cloud = require('../data/cloud.json');

console.log(cloud.resources.length);

cloud.resources.forEach ( item => {
    if ( item.public_id.startsWith("project") ){
        let search = (item.public_id.match(/[^\/]*\//g));
        search = search.join("/").replace(/\/$/, "").toLowerCase();
        searchPath = path.join(__dirname, '../content',`${search}.md`)
        console.log(searchPath, fs.existsSync(searchPath));
        if (fs.existsSync(searchPath)) {
            const content = fs.readFileSync(searchPath);
            const data = matter(content);
            
            if (false){
                data.data.left_images = [];
                data.data.right_images = [];
            } else {
                if (item.public_id.includes('-top-') ){
                    data.data.hero_image = item.public_id;
                } else if (item.public_id.includes('-left-') ){
                    if ( ! Array.isArray( data.data.left_images ) ) data.data.left_images = []
                    data.data.left_images.push ({src: item.public_id})
                } else if (item.public_id.includes('-right-') ){
                    if ( ! Array.isArray( data.data.right_images ) ) data.data.right_images = []
                    data.data.right_images.push ({src: item.public_id})
                }
            }
            fs.writeFileSync(searchPath, matter.stringify(data))
        }
    } 
});



