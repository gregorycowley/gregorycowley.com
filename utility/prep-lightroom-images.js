const fs = require("fs");
const path = require("path");

const imageSource = "/Users/gregorycowley/Desktop/2020_DesignPortfolio_v2_Folder/Projects";
const imageDestination = "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/public";

/*
    Copy and size images based on name
    Top = 1280
    Right = 720
    Left = 320

    Sharpen
    Crop Transparent pixels
    Name MD files with image project names. Or create a map.
    Add path to MD files.
    Build and adjust CSS
    Write real text


    --------
    - Take src path
    - resize and copy to destination path
        - Top = 1280
        - Right = 720
        - Left = 320
        - Sharpen
    - find md file
    - parse frontmatter
    - update frontmatter with:
        - hero_image: top
        - left_images: left
        - right_images: right
    - render HTML page with:
        - Top
        - Left
        - Right - after text content


    https://www.npmjs.com/package/gray-matter


    --- 
    Read frontmatter
    Write frontmatter
        matter()
        .read()
        .test()
        .stringify()

    ```
        {
            content: '\nThis is content.',
            data: { 
                title: 'Front Matter' 
            } 
        }
    ```

*/

let exampleData = {
    "slug": "gregory-cowleystudios",
    "title": "3MPS Portland",
    "subtitle": "A subtitle",
    "description": "A short description",
    "date": '20100821',
    "client": "3MPS",
    "firm": '',
    "author": "Gregory Cowley",
    "status": "Missing",
    "category": "design",
    "categoryAlt": "Unused",
    "discipline": "Artist",
    "projecttype": "Art Project",
    "type": '---',
    "hero_image": "/images/1920x1080.jpg",
    "left_images": [
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"},
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"},
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"}
    ],
    "right_images": [
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"},
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"},
        {"src": "/images/portfolio/2020-portfolio/2020-portfolio.001.png"}
    ]
}