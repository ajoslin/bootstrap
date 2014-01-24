var async = require('async');
var cp = require('child_process');
var Github = require('github');
var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');

var makeConfig = require('../../build.config');
var scripts = require('../scripts');
var taskUtils = require('../task-utils');

module.exports = cdnjs;

function cdnjs(gulp, config, callback) {
  var pkg = config.pkg;
  var github;
  try {
    github = taskUtils.getAuthenticatedGithub('gulp cdnjs');
  } catch(e) {
    return callback(e.toString());
  }

  var repoDir = path.resolve(__dirname, '../../dist', 'cdnjs');
  var dist = path.resolve(repoDir, 'ajax/libs/angular-ui-bootstrap', pkg.version);
  var pkgString = JSON.stringify(cdnjsPackageJson(pkg.version), null, 2);

  //Create a config to build to where we want in cdnjs repo
  config = makeConfig({
    pkg: pkg,
    dist: dist,
    jsFile: 'ui-bootstrap.js',
    bundleFile: 'ui-bootstrap-tpls.js'
  });

  var branch = 'angular-ui-bootstrap_' + pkg.version;

  gutil.log('[cdnjs] Updating local cdnjs...');

  async.eachSeries([
    taskUtils.asyncSpawn(__dirname + '/cdnjs-clone.sh', [repoDir]),
    scripts.bind(null, gulp, config),
    fs.writeFile.bind(fs, dist + '/package.json', pkgString),

    function(done) {
      gutil.log('[cdnjs] Pushing build files to angular-ui/cdnjs...');
      done();
    },
    taskUtils.asyncSpawn(__dirname + '/cdnjs-push.sh', [repoDir, pkg.version, branch]),

    function(done) {
      gutil.log('[cdnjs] Creating pull request to cdnjs...');
      done();
    },
    github.pullRequests.create.bind(github.pullRequests, {
      user: 'ajoslin',
      repo: 'cdnjs',
      title: '[author] angular-ui-bootstrap version ' + pkg.version,
      base: 'master',
      head: 'angular-ui:' + branch
    })
  ], taskUtils.asyncIterator, callback);
}

function cdnjsPackageJson(version) {
  return {
    'name': 'angular-ui-bootstrap',
    'description': 'Native AngularJS (Angular) directives for Twitter\'s Bootstrap. Small footprint (5kB gzipped!), no 3rd party JS dependencies (jQuery, bootstrap JS) required!',
    'author': 'https://github.com/angular-ui/bootstrap/graphs/contributors',
    'homepage': 'http://angular-ui.github.com/bootstrap/',
    'keywords': [
      'AngularJS',
      'angular',
      'angular.js',
      'bootstrap',
      'angular-ui',
      'AngularUI'
    ],
    'filename': 'ui-bootstrap-tpls.min.js',
    'version': version,
    'repositories': [{
      'type': 'git',
      'url': 'https://github.com/angular-ui/bootstrap'
    }],
    'bugs': 'https://github.com/angular-ui/bootstrap/issues',
    'licenses': [
      {
        'type': 'MIT',
        'url': 'https://github.com/angular-ui/bootstrap/blob/master/LICENSE'
      }
    ]
  };
}
