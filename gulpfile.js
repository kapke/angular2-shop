var gulp = require('gulp'),
    merge = require('merge2'),
    gulpWebServer = require('gulp-webserver'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

var src = {
        ts: ['./src/**/*.ts'],
        sass: ['./src/style/style.scss', './src/style/*.scss']
    },
    dest = {
        sass: './src/style'
    },
    tsProject = ts.createProject('tsconfig.json');

function serve () {
    return gulp.src('./')
        .pipe(gulpWebServer({
            livereload: true,
            directoryListing: true,
            open: true
        }));
}

function compileTs () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest('./'));
}

function compileSass () {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: true}))
        .pipe(gulp.dest(dest.sass));
}

function build () {
    return merge([compileSass(), compileTs()]);
}

gulp.task('serve', ['build'], function () {
    gulp.watch(src.ts, compileTs);
    gulp.watch(src.sass, compileSass);
    return serve();
});

gulp.task('build', function () {
    return build();
});