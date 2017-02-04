var gulp = require('gulp');
var	imagemin = require('gulp-imagemin');
var	rename = require('gulp-rename');
var changed = require('gulp-changed');

gulp.task('images', function () {
  return gulp.src(['static/images/*', 'themes/*/static/images/*'])
      .pipe(rename(function(path) {
          if(path.dirname.indexOf('static/images')) {
              path.dirname = path.dirname.split('static/images').pop();
          }
      }))
      .pipe(changed('build/images'))
      .pipe(imagemin())
      .pipe(gulp.dest('build/images'));
});