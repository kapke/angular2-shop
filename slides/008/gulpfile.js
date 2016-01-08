var gulp = require('gulp'),
    merge = require('merge2'),
    gulpWebServer = require('gulp-webserver'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

var src = {
        ts: ['./src/**/*.ts'],
        templates: './src/**/*.html',
        sass: ['./src/style/style.scss', './src/style/*.scss']
    },
    dest = {
        js: './dist',
        templates: './dist/',
        sass: './dist/style'
    },
    tsProject = ts.createProject('tsconfig.json');

function serve () {
    return gulp.src('./')
        .pipe(gulpWebServer({
            host: '0.0.0.0',
            livereload: true,
            directoryListing: false,
            open: true
        }));
}

function compileTs () {
    var tsResult = gulp.src(src.ts)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(dest.js));
}

function compileSass () {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(dest.sass));
}

function copyHtml () {
    return gulp.src(src.templates)
        .pipe(gulp.dest(dest.templates));
}

function build () {
    return merge([compileSass(), compileTs(), copyHtml()]);
}

gulp.task('serve', ['build'], function () {
    gulp.watch(src.ts, compileTs);
    gulp.watch(src.sass, compileSass);
    gulp.watch(src.templates, copyHtml);
    return serve();
});

gulp.task('build', function () {
    return build();
});
