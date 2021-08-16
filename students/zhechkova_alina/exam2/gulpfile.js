'use strict'
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssnano'),
    sourceMaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    rename = require("gulp-rename"),
    webpack = require('webpack-stream');

const buildPath = './build/';
const srcPath = './src/';

const isDev = true;

const webpackConfig = {
    mode: isDev ? 'development' : 'production',
    output: {
        filename: 'script.js'
    },
    watch: false,
    devtool: isDev ? 'source-map' : 'none',
    module: {
        rules: [{
            test: /\.n?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: isDev,
                            corejs: 3,
                            useBuiltIns: 'usage'
                        }]
                    ]
                }
            }
        }]
    }
}
const path = {
    build: {
        html: buildPath,
        js: buildPath + 'js/',
        css: buildPath + 'css/',
        images: buildPath + 'image/',
        fonts: buildPath + 'fonts/',
    },
    src: {
        html: srcPath + '[^_]*.html',
        js: srcPath + 'js/**/*.js',
        css: srcPath + 'css/**/*.{scss,css}',
        images: srcPath + 'image/**',
        fonts: srcPath + 'fonts/**',
    },
    watch: {
        html: srcPath + '**/*.html',
        js: srcPath + 'js/**/*.js',
        images: srcPath + 'image/**/*.{png,jpg,svg,gif}',
        css: srcPath + 'css/**/*.{scss,css}'
    },
    clean: buildPath,
};

gulp.task("webserver", function () {
    return browserSync({
        /*proxy: "my.web.local",*/
        host: 'localhost',
        port: 3300,
        tunnel: false,
        server: path.build.html
    });
});

gulp.task("html:build", function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("images:build", function () {
    return gulp.src(path.src.images)
        .pipe(gulp.dest(path.build.images))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("fonts:build", function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("js:build", function () {
    return gulp.src(path.src.js)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));
});


gulp.task("style:prod", function () {
    return gulp.src(path.src.css)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.build.css));
});

gulp.task("style:build", function () {
    return gulp.src(path.src.css)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("build", gulp.parallel(
    'html:build',
    'js:build',
    'style:build',
    'images:build',
    'fonts:build'
));
/*
gulp.task("buildProd", gulp.parallel(
    'html:build',
    'js:prod',
    'style:prod',
    'images:build',
    'fonts:build'
));
*/
gulp.task("watch", function () {
    watch([path.watch.js], gulp.parallel('js:build'));
    watch([path.watch.html], gulp.parallel('html:build'));
    watch([path.watch.css], gulp.parallel('style:build'));
    watch([path.watch.images], gulp.parallel('images:build'))
});

gulp.task("clean", function (callback) {
    return rimraf(path.clean, callback);
});

gulp.task('default', gulp.parallel('build', 'webserver', 'watch'));

// gulp.task('prod', gulp.series('clean', gulp.parallel('buildProd')));
