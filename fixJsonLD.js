import fs from 'fs';

const filePathList = ['./dist/index.html', './dist/privacy-policy/index.html', './dist/posts/index.html'];

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
filePathList.forEach((file)=>{
    fixJsonLD(file);
});