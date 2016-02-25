"use strict";
const fs = require('fs');
const jade = require('jade');
const path = require('path');

const generateIndex = jade.compileFile(path.join(__dirname, 'index.jade'), {pretty: true});
const generateList = jade.compileFile(path.join(__dirname, 'list.jade'), {pretty: true});
const generateParagraph = jade.compileFile(path.join(__dirname, 'paragraph.jade'), {pretty: true});

function slugify (text) {
    return text.replace(/\s/g, '-');
}

function compileModule (module) {
    const {name, filename, slug, tasks} = module;
    let html;
    if(tasks instanceof Array) {
        html = generateList({
            name,
            tasks: tasks.map(text => {
                return {
                    isAdditional: text[text.length-1] == '*',
                    text: text.replace('*', '')
                }
            })
        })
    } else if (typeof tasks == 'string') {
        html = generateParagraph({name, task: tasks})
    }
    fs.writeFileSync(filename, html);
}

const tasks = JSON.parse(fs.readFileSync(path.join(__dirname, 'tasks.json')));

const modules = Object.keys(tasks)
    .map((name) => {
        const slug = slugify(name);
        const filename = `${slug}.html`;
        return {
            name,
            slug,
            filename,
            tasks: tasks[name]
        };
    });

modules.forEach(compileModule);

fs.writeFileSync('index.html', generateIndex({modules}));
