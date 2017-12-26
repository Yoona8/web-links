'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var cssmin = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var paths = {
    styles: './app/scss/',
    views: './app/views/',
    destination: './dist/'
};
var settings = {
    browsers: 'last 5 versions'
};

gulp.task('views', function() {
    return gulp.src(paths.views + 'pages/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.destination));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles + 'style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [settings.browsers]
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.destination + 'content/styles'));
});

gulp.task('watch', function () {
    gulp.watch(paths.views + '**/*.*', ['views']);
    gulp.watch(paths.styles + '**/*.*', ['styles']);
});