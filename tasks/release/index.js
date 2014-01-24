var async = require('async');
var conventionalChangelog = require('conventional-changelog');
var cp = require('child_process');
var extend = require('lodash.assign');
var fs = require('fs');
var gutil = require('gulp-util');
var path = require('path');
var semver = require('semver');

var makeConfig = require('../../build.config');
var bower = require('../bower');
var cdnjs = require('../cdnjs');

var root = path.resolve(__dirname, '../..');

module.exports = {
  prerelease: prerelease,
  postrelease: postrelease,
  all: release
};

function asyncSpawn(cmd, args) {
  return function(done) {
    cp.spawn(cmd, args, {stdio:'inherit'}).on('exit', done);
  };
}
function asyncIterator(value, done) {
  value(done);
}

function prerelease(gulp, callback) {
  var pkg = require(root + '/package.json');

  //Remove suffix from version (eg -SNAPSHOT)
  var newVersion = pkg.version.replace(/\-(.*)?$/, '');
  var newPkg = extend({}, pkg, { version: newVersion });
  var newPkgString = JSON.stringify(newPkg, null, 2);

  gutil.log('[release-pre] Pushing version ', gutil.colors.cyan(newVersion), 'to master ...');

  async.eachSeries([
    fs.writeFile.bind(fs, root + '/package.json', newPkgString),
    changelog.bind(null, root + '/CHANGELOG.md', newVersion),
    asyncSpawn(__dirname+'/prerelease.sh', [root, newVersion])
  ], asyncIterator, callback);

  function changelog(dest, version, done) {
    conventionalChangelog({
      version: version
    }, function(err, log) {
      if (err) { return done(err); }
      fs.writeFile(dest, log, done);
    });
  }
}

function postrelease(gulp, bumpType, callback) {
  //Use fs.readFileSync here instead of require() because we want updated package
  var pkg = JSON.parse(fs.readFileSync(root + '/package.json'));

  var nextVersion = semver.inc(pkg.version, bumpType) + '-snapshot';
  var nextPkg = extend({}, pkg, { version: nextVersion });
  var nextPkgString = JSON.stringify(nextPkg, null, 2);

  gutil.log('[release-post] Starting', gutil.colors.cyan(nextVersion), '...');

  async.eachSeries([
    fs.writeFile.bind(fs, root + '/package.json', nextPkgString),
    asyncSpawn(__dirname+'/postrelease.sh', [root, nextVersion])
  ], asyncIterator, callback);
}

function release(gulp, bumpType, callback) {
  var defaultConfig = makeConfig();

  async.eachSeries([
    prerelease.bind(null, gulp),
    bower.bind(null, gulp, defaultConfig),
    cdnjs.bind(null, gulp, defaultConfig),
    postrelease.bind(null, gulp)
  ], asyncIterator, callback);
}
