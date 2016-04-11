var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', function () {
  // Serve it
  exec('nodemon');

  // Watch those assets
  exec('compass watch public');

  // Run Browser-Sync
  exec('browser-sync start --config="bs-config.js"')
});
