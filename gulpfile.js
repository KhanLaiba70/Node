const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

// Watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
