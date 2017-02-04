var gulp = require('gulp');
var rev = require('gulp-rev');
var revDel = require('rev-del');
var path = require('path');
var del = require('del');

gulp.task('revision', ['styles','scripts', 'images', 'assets'], function() {
    del.sync(['build/styles/**/*.scss', 'build/scripts/**/*/js','public/styles/*.scss', 'public/scripts/*.js'], { force: true });

	return gulp.src(['build/**'])
		.pipe(gulp.dest('public'))
});
