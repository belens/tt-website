var gulp = require('gulp');
var	sass = require('gulp-sass');
var	rename = require('gulp-rename');
var	autoprefixer = require('gulp-autoprefixer');
var	minifycss = require('gulp-minify-css');

gulp.task('styles', function() {
	return gulp.src(['static/styles/**/*.scss', 'themes/*/static/styles/**/*.scss'])
        .pipe(rename(function(path) {
            if(path.dirname.indexOf('static/styles')) {
                path.dirname = path.dirname.split('static/styles').pop();
            }
        }))
		.pipe(sass())
		.pipe(autoprefixer('last 2 version'))
		.pipe(minifycss({advanced:true}))
		.pipe(gulp.dest('build/styles'))
});