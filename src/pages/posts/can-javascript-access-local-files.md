---
layout: "../../layouts/blog-post.astro"
title: Can JavaScript access local files
slug: can-javascript-access-local-files
description: 
date: Thu, 07 Jan 2021 20:02:06 +0000
author: anas ouardini
draft: false
category: javascript js-questions
---


**JavaScript does not have direct access to the local files due to security and privacy. By using a file input and a File reader, you can read one or multiple local files. We can offer the user the possibility to select files via a "file input" element that we can then process. The "file" input has a "files" property with the selected file(s). We can use a "File Reader" to access the content of the selected file(s).**

## How it works

Since the local files cannot be accessed from the user’s device using **JavaScript** I the browser,

Reading local files with** JavaScript** we need to provide the user with a way to select one or multiple files for us to use.

This can be done with the HTML file input element:

<pre title="File Type Input" class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><input type="file" id="fileInput"></code></pre>

If you want to allow the selection of multiple files, you can add the multiple attribute:

<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><input type="file" id="fileInput" multiple></code></pre>

you can either use the change event of the input field to respond to a file selection

or add another UI element to let the user explicitly start the processing of the selected file.

**Also note:** The selection of a file with the input element does not upload the file anywhere,

the only thing that happens is that the file becomes available to the **JavaScript **on the page.

The file input has a files property that is a list **(as there could be multiple selected files)** of File objects.

<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><input type="file" id="fileInput">

<script>

    document.getElementById("fileInput").addEventListener("change", function selectedFileChanged() {

      console.log(this.files); 

      // will contain information about the file that was selected.

    });

</script></code></pre>

**A File object looks like this:**

<pre class="wp-block-code"><code lang="json" class="language-json line-numbers">  {

      name: 'test.txt', // the name of the selected file

      size: 1024, // the size in bytes

      type: 'text/plain', // the assumed file type based on file extension. This might be incorrect.

      lastModified: 12345567890, // timestamp of the last change according to the user's system

      lastModifiedDate: 'Thu Jul 04 2019 09:22:51 GMT+0200 (Central European Summer Time)' // a date object for the last modified timestamp

 }</code></pre>

Now we have the ability to select a file and see the metadata, **but how can we access the file content?**

To get the actual content of a selected file, we need a File Reader.

A file reader takes a File object and offers us methods to get access to the data as:

- a string of text data

- a data URL

- a string of binary data

- an Array Buffer containing raw binary data

You can read and process the file using the File API if you select a file via <code><input type="file"></code>, The builders of the popular browsers do not generally allow JavaScript code to access files. By having its local URL, **JavaScript** cannot access the file, that’s the main idea. However, by having a Data URL of a file, JavaScript code can use the file. Therefore, if you browse a file and open it, instead of getting "**URL**" directly from the HTML, JavaScript should be able to get “**Data URL**".

**Here are some challenges many people go through when trying to access files using JavaScript**:

## Local file access with JavaScript

In order to use **JavaScript **to access files and folders, currently we do have two ways two ways to do it:

- Using JavaScript extensions** (runs from JavaScript Editor)**.

- By the use of a web page and ActiveX objects **(Internet Explorer only)**

## Read files in JavaScript

In the new browser, JavaScript cannot typically access **local files** but the <code>XMLHttpRequest</code> object can be utilized in order to read the files. By the use of **JavaScript **<code>File Reader</code> objects, the browser can open the local files. In order to read a file from the local file system, you can achieve this by:

- Choosing a file from the user's system through the **<code><input></code> file element**.

- Reading the chosen file using a <code>File Reader</code> object.

## Using JavaScript to open local folder

### Open local folder from link

In order to successfully use JavaScript to read a folder from a link in the **filesystem**, you can choose a file from the user's system through <code><input></code>  file element. Read the chosen file using the <code>File Reader </code>object.

### open a folder on local computer

**JavaScript **cannot typically access local files in new browsers, but the <code>XMLHttpRequest </code>object can be used to read files. So, it is actually Ajax (and not JavaScript) that is reading the file. Here is an example to **read file abc.txt**:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">var txt = "";

var xmlhttp = new XMLHttpRequest ();

xmlhttp. onreadystatechange = function () {

    if (xmlhttp. Status == 200 && xmlhttp. ready State == 4) {

        txt = xmlhttp. response Text;

    }

};

xmlhttp. Open ("GET","abc.txt”, true);

xmlhttp. send ();</code></pre>

## Conclusion

It can be concluded that although **JavaScript** cannot access local files directly due to privacy and security, the file can be selected through the "file input" element which can process the file. A "File Reader" can then be used to access the content of the selected files.

**Recommended Articles:**

- <a href="/posts/can-javascript-be-used-for-hacking/" target="_blank" rel="noreferrer noopener">Can JavaScript Be Used For Hacking?</a>

**References**

- Bellenot, B., & Linev, S. (2015). JavaScript ROOT. In J. Phys.: Conf. Ser. (Vol. 664, p. 062033).

- de Abreu Resenes, J., Pavan, W., Hölbig, C. A., Fernandes, J. M. C., Shelia, V., Porter, C., & Hoogenboom, G. (2019). jDSSAT: A **JavaScript** module for DSSAT-CSM integration. SoftwareX, 10, 100271.

- Egele, M., Wurzinger, P., Kruegel, C., & Kirda, E. (2009, July). Defending browsers against drive-by downloads: Mitigating heap-spraying code injection attacks. In International Conference on Detection of Intrusions and Malware, and Vulnerability Assessment (pp. 88-106). Springer, Berlin, Heidelberg.

- Wassermann, G., & Su, Z. (2008, May). Static detection of cross-site scripting vulnerabilities. In 2008 ACM/IEEE 30th International Conference on Software Engineering (pp. 171-180). IEEE.


