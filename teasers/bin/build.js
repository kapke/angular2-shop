var jade = require('jade'),
    fs = require('fs'),
    path = require('path');

const buildIndex = jade.compileFile('template/index.jade', {pretty: true});


function buildDirectory (directory) {
    const slides = JSON.parse(fs.readFileSync(path.join(directory, 'slides.json')));
    const index = buildIndex(slides);

    function getSlideFilename (slide, extension) {
        const ext = extension || 'jade';
        return `slide-${slide}.${ext}`;
    }

    function getSlideTemplatePath (slide) {
        return path.join(directory, 'jade', getSlideFilename(slide));
    }

    function getSlideHtmlPath (slide) {
        return path.join(directory, getSlideFilename(slide, 'html'));
    }

    fs.writeFileSync(path.join(directory, 'index.html'), index);
    slides.slides
        .map(slide => {
            return {
                slide,
                templatePath: getSlideTemplatePath(slide),
                htmlPath: getSlideHtmlPath(slide)
            };
        })
        .map(slide => {
            slide.html = jade.renderFile(slide.templatePath, {pretty: true});

            return slide;
        })
        .forEach(slide => {
            fs.writeFileSync(slide.htmlPath, slide.html);
        });

}

function getDirectories (base) {
    return fs.readdirSync(base)
        .map(name => ({name, base, path: path.join(base, name)}))
        .filter(file => fs.statSync(file.path).isDirectory())
        .filter(file => {
            return (['bin', 'template', 'node_modules'].indexOf(file.name) == -1);
        })
        .map(dir => dir.path)
        .sort();
}

function buildTeasersIndex (teasers) {
    teasers = teasers.map(teaser => teaser.split('/').pop());
    const html = jade.renderFile('template/teasersIndex.jade', {teasers, pretty: true});
    fs.writeFileSync('index.html', html);
}

const directories = getDirectories(process.cwd());
directories.forEach(buildDirectory);
buildTeasersIndex(directories);
