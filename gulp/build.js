var gulp = require("gulp");
var reload = require("browser-sync").reload;
var del = require('del');

gulp.task('build:content', ['reference:content'], reload);

gulp.task('build:all', ['reference:all'], function() {
    reload();
    del.sync(['build'], { force: true })
});

gulp.task('build:publish', ['reference:publish'], function() {
    del.sync(['build'], { force: true });
});