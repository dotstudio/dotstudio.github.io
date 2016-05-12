'use strict'

let fs = require('fs');
let gulp = require("gulp");
let ejs = require('gulp-ejs');
let gutil = require('gulp-util');
let json = JSON.parse(fs.readFileSync("./package.json"));

let paths = {
  templates: './src/templates/*.ejs',
  scripts: ['./src/js/*.ejs'],
  images: 'client/img/**/*'
};

gulp.task('templates', () => {

  return gulp.src(paths.templates)
      .pipe(ejs(json,{'ext': '.html'}))
      // .on('error', gutil.log))
      // .pipe(ejs(json, ))
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['templates','watch']);
