var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', function () {
  // Serve it
  exec('sudo nodemon');

  // Watch those assets
  exec('sudo compass watch public');

  // Run Browser-Sync
  exec('sudo browser-sync start --config="bs-config.js"')
});
