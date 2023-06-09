#!/usr/bin/node

import fs from 'fs';
import he from 'he';

const outputPath = './src/pages/posts';

const sitemap = fs.readFileSync('./.bkp/yesfordev.WordPress.2023-05-30.xml', 'utf-8');

// get item
let items = sitemap.split('<item>');
items.shift();

items = items.map((item)=>{
    item = item.split('</item>')[0];

    // fix structure
    const newStruct = {};
    const props = ['title', 'link', 'pubDate', 'description', 'content'];
    props.forEach((prop)=>{
        if(prop === 'title'){
          newStruct[prop] = item.split(`<title><![CDATA[`)[1].split(`]]></title>`)[0];
        }else if(prop === 'link'){
          newStruct[prop] = item.split(`<${prop}>`)[1].split(`</${prop}>`)[0];
          newStruct['slug'] = newStruct[prop].split('.com/')[1].split('/')[0]
        }else if(prop === 'content'){
          newStruct[prop] = item
            .split(`<content:encoded><![CDATA[`)[1]
            .split(`]]></content:encoded>`)[0]
            .replace(/<!--.*wp:.*-->/g, '')

            .replace(/(?:https?:\/\/)?(?:www\.)?yesfordev\.com(?!\/wp-content)/g, "/posts")
            .replace(/(?:https?:\/\/)?(?:www\.)?yesfordev\.com/g, "")

            .replace(/<\s*p[^>]*>(.*?)<\/p>/g, "$1") // removing P tags

            .replace(/<\s*strong\b[^>]*>(.*?)<\/\s*strong\s*>/g, "**$1**")// replace strong with **
            .replace(/<\s*em\b[^>]*>(.*?)<\/\s*em\s*>/g, "*$1*")// replace em with *
            .replace(/<\s*i\b[^>]*>(.*?)<\/\s*i\s*>/g, "*$1*")// replace i with *

            .replace(/<h1([^>]*)>(.*?)<\/h1>/g, "\n\n# $2\n")
            .replace(/<h2([^>]*)>(.*?)<\/h2>/g, "\n\n## $2\n")
            .replace(/<h3([^>]*)>(.*?)<\/h3>/g, "\n\n### $2\n")
            .replace(/<h4([^>]*)>(.*?)<\/h4>/g, "\n\n#### $2\n")
            .replace(/<h5([^>]*)>(.*?)<\/h5>/g, "\n\n##### $2\n")
            .replace(/<h6([^>]*)>(.*?)<\/h6>/g, "\n\n###### $2\n")

            .replace(/<\s*blockquote[^>]*>(.*?)<\/\s*blockquote>/g, "\n> $1\n")

            .replace(/<\s*(ol|ul)\b[^>]*>/g, '') // Remove opening <ul> tag
            .replace(/<\/\s*(ol|ul)\s*>/g, '') // Remove closing </ul> tag
            .replace(/<\s*li\b[^>]*>(.*?)<\/\s*li\s*>/g, '- $1\n') // Replace <li> with

            .replace(/(?:\r\n|\n\r|\r|\n)+/g, "\n\n");

          // convert figure>img
          // newStruct[prop] = newStruct[prop].replace(/<\s*figure\b[^>]*><\s*img\b[^>]*><\/\s*figure\s*>/g, function(match) {
          //   var imgTag = match.match(/<\s*img\b[^>]*>/)[0];
          //   var src = imgTag.match(/src=['"]([^'"]+)['"]/)[1];
          //   var altMatch = imgTag.match(/alt=['"]([^'"]+)['"]/);
          //   var alt = altMatch ? altMatch[1] : "";
          //   return "![alt text](" + src + ")";
          // });

          // decode html chars
          newStruct[prop] = he.decode(newStruct[prop]);

          newStruct['draft'] = item.includes('[draft]');
        }else{
          newStruct[prop] = item.split(`<${prop}>`)[1].split(`</${prop}>`)[0];
        }

    });

    return newStruct;
});

// store in mdx files
items.forEach((item, index)=>{

  // exclude draft articles
  if(item.draft){return;}

  // if(index > 0) return;

  let fileContent = `---\n`;
  fileContent += `layout: "../../layouts/blog-post.astro"\n`;
  fileContent += `title: ${item.title}\n`;
  fileContent += `slug: ${item.slug}\n`;
  fileContent += `description: ${item.description}\n`;
  fileContent += `date: ${item.pubDate}\n`;
  fileContent += `author: Anas Ouardini\n`;
  fileContent += `draft: ${item.draft}\n`;
  fileContent += `category: javascript js-questions\n`;
  fileContent += `---\n`;
  fileContent += `${item.content}\n`;

  fs.writeFileSync(`${outputPath}/${item.slug}.md`, fileContent);
});
