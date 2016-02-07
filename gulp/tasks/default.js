var gulp = require('gulp');

gulp.task('default', ['watch'], function () {
	gulp.src("src/**.*")
		.pipe(gulp.dest("build/"));
});
