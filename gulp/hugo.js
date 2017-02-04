var gulp = require('gulp');
var exec = require('sync-exec');
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(drafts) {
	var cmd = 'hugo';
	if (drafts) {
		cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
	}

	var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result.stdout);

    return result;
}

gulp.task('hugo:execute:drafts', function() {
    return hugo(false);
});

gulp.task('hugo:execute:no-drafts', function() {
    return hugo(true);
});

gulp.task('hugo:draft', ['hugo:execute:drafts'], function() {
	return;
});

gulp.task('hugo:all', ['hugo:execute:drafts', 'revision'], function() {
	return;
});

gulp.task('hugo:live', ['hugo:execute:no-drafts', 'revision'], function() {
	return;
});