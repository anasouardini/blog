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
          newStruct['draft'] = item.includes('[draft]');
        }else{
          newStruct[prop] = item.split(`<${prop}>`)[1].split(`</${prop}>`)[0];
        }

    });

    return newStruct;
});

// store in mdx files
let redirections = '';
items.forEach((item, index)=>{

  // exclude draft articles
  if(item.draft){return;}
    
  redirections += `/${item.slug} /posts/${item.slug} 301\n`;
});

fs.writeFileSync(`./public/_redirects`, redirections);
