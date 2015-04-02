'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {

    var ghPagesOptions = {branch: 'master'};

    gulp.task('deploy', ['build'], function () {
        return gulp.src('./dist/**/*')
            .pipe($.ghPages(ghPagesOptions));
    });
}