'use strict'

const fs = require('fs');
const gulp = require("gulp");
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const json = JSON.parse(fs.readFileSync("./package.json"));

const paths = {
  templates: './src/templates/*.ejs',
  scripts: './src/js/*.js',
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

//es6 -> es5
gulp.task('scripts', () => {
	return gulp.src(paths.scripts)
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch', () => {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['templates','styles','scripts','watch']);
