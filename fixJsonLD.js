import fs from 'fs';
import path from 'path';

const fixJsonLD = (file)=>{
    let htmlString = fs.readFileSync(file, 'utf-8');

    // replacing p with script
    htmlString = htmlString.replace(/<p.*?(type=?application\/ld\+json?)/, '<script $1');
    const chunks = htmlString.split('application/ld+json');
    chunks[1] = chunks[1].replace(/<\/p>/, '</script>');
    htmlString = chunks.join('application/ld+json');

    // extracting the json+ld
    const jsonldscriptpattern = /<script type=?application\/ld\+json.*?<\/script>/;
    let extractedJsonLD = htmlString.match(jsonldscriptpattern);
    if(!extractedJsonLD){
        process.exit(1);
    }

    // deleting the json+ld
    htmlString = htmlString.replace(jsonldscriptpattern, '');

    const chunks2 = htmlString.split('</head>');
    chunks2[0] = chunks2[0] +''+ extractedJsonLD[0].replace(/&quot;/g, '"');
    htmlString = chunks2.join('</head>')

    fs.writeFileSync(file, htmlString);
}

function listHtmlFiles(directoryPath) {
    const htmlFiles = [];

    function traverseDirectory(dir) {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            traverseDirectory(filePath);
        } else if (path.extname(filePath) === '.html') {
            htmlFiles.push(filePath);
        }
        });
    }
    traverseDirectory(directoryPath);

    return htmlFiles;
}

listHtmlFiles('./dist').forEach((file)=>{
    fixJsonLD(`./${file}`);
});