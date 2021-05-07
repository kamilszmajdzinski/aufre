const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series['styles']);