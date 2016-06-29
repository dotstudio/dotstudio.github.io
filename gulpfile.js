'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  styles: 'src/scss/**/*.scss'
}

gulp.task('styles', ()=> {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./themes/dotstudio/static/css/'));
});

gulp.task('watch', ()=> {
  gulp.watch(paths.styles, ['styles']);
}

);

gulp.task('default', ['styles', 'watch']);
