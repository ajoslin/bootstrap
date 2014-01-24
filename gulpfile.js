var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var jshint = require('gulp-jshint');
var cp = require('child_process');
var es = require('event-stream');

var makeConfig = require('./build.config');
var defaultConfig = makeConfig({});

var scripts = require('./tasks/scripts');
var docs = require('./tasks/docs');
var bower = require('./tasks/bower');
var cdnjs = require('./tasks/cdnjs');
var release = require('./tasks/release');

gulp.task('jshint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(require('jshint-stylish')));
});

gulp.task('build', ['jshint'], function(callback) {
  scripts(gulp, defaultConfig, callback);
});

gulp.task('docs', function(callback) {
  docs(gulp, defaultConfig, callback);
});

gulp.task('bower', function(callback) {
  bower(gulp, defaultConfig, callback);
});

gulp.task('cdnjs', function(callback) {
  cdnjs(gulp, defaultConfig, callback);
});

gulp.task('release-pre', ['build'], function(callback) {
  release.prerelease(gulp, callback);
});

gulp.task('release-post', function(callback) {
  var bumpType;
  try {
    bumpType = getBumpType('release-post');
  } catch(e) {
    return callback(e.toString());
  }
  release.postrelease(gulp, bumpType, callback);
});

gulp.task('release', function(callback) {
  var bumpType;
  try {
    bumpType = getBumpType('release');
  } catch(e) {
    return callback(e.toString());
  }
  release.all(gulp, bumpType, callback);
});

function getBumpType(taskName) {
  var bump = gutil.env.bump;
  if (['patch','minor','major'].indexOf(bump) === -1) {
    throw new Error(
      'Usage: gulp ' + taskName +' --bump=<type>\n' +
      '  type: major, minor, or patch'
    );
  }
  return bump;
}

function karma(args, done) {
  return cp.spawn(
    'node',
    ['node_modules/karma/bin/karma'].concat(args.split(' ')),
    { stdio: 'inherit' }
  ).on('exit', done);
}

var karmaConfig = gutil.env.coverage ? 'test/karma-coverage.conf.js' : 'test/karma.conf.js';
gulp.task('test', function(done) {
  karma('start ' + karmaConfig + ' --singleRun=true ' +
    '--browsers=' + (process.env.TRAVIS ? 'Firefox' : 'Chrome'), done);
});

gulp.task('watch', function(done) {
  karma('start ' + karmaConfig, done);
});

gulp.task('sauce', function(done) {
  karma('start test/karma-sauce.conf.js --singleRun=true', done);
});

gulp.task('default', ['build', 'test', 'docs']);
