'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('install', function () {
        return gulp.src(['./bower.json', './package.json'])
                .pipe($.install())
    })
}