var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');
var exec = require('child_process').exec;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
	'src':[
    './models/**/*.js',
    './routes/**/*.js',
    'keystone.js',
    'package.json'
  ],
	'style': {
		all: './public/sass/***',
		output: './public/stylesheets/'
	}
};

// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.watch(paths.src, ['lint']);
});

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
    .pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('runKeystone', nodemon());

gulp.task('watch', [
  'watch:sass',
  'watch:lint'
]);

gulp.task('runMongo', () => {
  exec('mongod')  
});

gulp.task('runBrowserSync', function () {
  // Run Browser-Sync
  browserSync.init([
    "views/***",
    "public/stylesheets/***",
    "public/scripts/***"
  ], {
    proxy: 'localhost:9000',
    injectChanges: true,
    open: true,
    browser: "Google Chrome Canary"
  });
});

gulp.task('default', [
  'watch',
  'runMongo',
  'runKeystone',
  'runBrowserSync'
]);

gulp.task('serve', [
  'runMongo',
  'runKeystone',
]);
