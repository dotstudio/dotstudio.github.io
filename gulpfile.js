'use strict'

let fs = require('fs');
let gulp = require("gulp");
let ejs = require('gulp-ejs');
let sass = require('gulp-sass');
let gutil = require('gulp-util');
let json = JSON.parse(fs.readFileSync("./package.json"));

let paths = {
  templates: './src/templates/*.ejs',
  scripts: ['./src/js/*.ejs'],
  images: 'client/img/**/*',
  styles: './src/scss/*.scss'
};

//EJS -> HTML
gulp.task('templates', () => {
  return gulp.src(paths.templates)
      .pipe(ejs(json,{'ext': '.html'})
      .on('error', gutil.log))
      .pipe(gulp.dest('./'));
});

//scss -> css
gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', () => {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['templates','styles','watch']);
