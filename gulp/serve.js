var gulp        = require("gulp");
var browserSync = require("browser-sync");

gulp.task('serve', ['build:all'], function() {
    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./public/"
        },
        open: false
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(['layouts/**/*', 'content/**/*', 'archetypes/**/*', 'themes/**/*'], ['build:content']);
	gulp.watch(['static/**/*', 'themes/*/static/**/*'], ['build:all']);
})
