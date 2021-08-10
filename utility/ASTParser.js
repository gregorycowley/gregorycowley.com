const babelParser = require('@babel/parser');
const fs = require('fs');
const content = fs.readFileSync(__dirname + "/../src/pages/index.js", 'utf-8');

// console.log(content);

const ast = babelParser.parse(content,{
    sourceType: 'module',
    plugins: ['jsx']
});

const output = JSON.stringify(ast, null, 4);
fs.writeFileSync(__dirname + '/../outputAST.json', output, 'utf-8');

