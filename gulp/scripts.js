var gulp = require('gulp');
var	jshint = require('gulp-jshint');
var	rename = require('gulp-rename');
var	uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
   	return gulp.src(['static/scripts/**/*.js', 'themes/**/static/scripts/**/*.js'])
	    .pipe(jshint())
	    .pipe(jshint.reporter("default"))
        .pipe(rename(function(path) {
            if(path.dirname.indexOf('static/scripts')) {
                path.dirname = path.dirname.split('static/scripts').pop();
            }
        }))
        .pipe(concat('main.js'))
	    .pipe(uglify())
		.pipe(gulp.dest('build/scripts'))
})