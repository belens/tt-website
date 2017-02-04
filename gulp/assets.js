var gulp = require('gulp');
var	rename = require('gulp-rename');

// SVG optimization task
gulp.task('assets', function () {
    return gulp.src(['static/**/*', '!static/images/*', '!static/styles/*', '!static/scripts/*', '!themes/*/static/images/*', '!themes/*/static/styles/*', '!themes/*/static/scripts/*'])
        .pipe(rename(function(path) {
            if(path.dirname.indexOf('static')) {
                path.dirname = path.dirname.split('static').pop();
            }
        }))
        .pipe(gulp.dest('build'));
});