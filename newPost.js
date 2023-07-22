import fs from 'fs';

function slugify(str) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

const fileName = process.argv[2];
const fileSlug = slugify(process.argv[2]);

const frontMatter = `---
title: ${fileName}
seo_title: ${fileName}
description: ${fileName}
seo_description: ${fileName}
date: ${new Date().toDateString()}
seo_date: ${(new Date().toISOString()).split('T')[0]}
author: Anas Ouardini
category: [JavaScript, Reactjs, Performance]
keywords: [
]
todos: [
    'check grammar',
    'proof-read',
]
---

import Block from '../../components/blogPostBlocks.astro';
`

fs.writeFileSync('./src/content/posts/'+fileSlug+'.mdx', frontMatter);
