var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch:sass', function () {
	gulp.watch({
		all: './public/sass/***',
		output: './public/stylesheets/'
	}, ['sass']);
});

gulp.task('sass', function(){
	gulp.src({
		all: './public/sass/***',
		output: './public/stylesheets/'
	})
    .pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('runKeystone', nodemon());

gulp.task('watch', ['watch:sass']);

gulp.task('runMongo', () => {
  exec('mongod');
});

gulp.task('runBrowserSync', function () {
  // Run Browser-Sync
  browserSync.init([
    'views/***',
    'public/stylesheets/***',
    'public/scripts/***'
  ], {
    proxy: 'localhost:9000',
    injectChanges: true,
    open: true,
    browser: 'Google Chrome Canary'
  });
});

gulp.task('default', [
  'runMongo',
  'runKeystone',
  'runBrowserSync',
  'watch'
]);
