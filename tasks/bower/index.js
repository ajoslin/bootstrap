
var fs = require('fs');
var path = require('path');
var template = require('lodash.template');
var gutil = require('gulp-util');
var cp = require('child_process');
var async = require('async');
var taskUtils = require('../task-utils');
var Github = require('github');

var scripts = require('../scripts');
var makeConfig = require('../../build.config.js');
var getDeps = require('./dependencies');

module.exports = runBower;

var githubOrg = 'ui-bootstrap-bower-test';
function bowerName(module) {
  return 'bower-bootstrap-'+module;
}

function runBower(gulp, config, callback) {
  var github;
  try {
    github = taskUtils.getAuthenticatedGithub('gulp bower');
  } catch(e) {
    return callback(e.toString());
  }

  async.each(config.modules, buildBowerModule, callback);

  function buildBowerModule(module, callback) {
    var moduleConfig = makeConfig({
      modules: [module],
      dist: path.resolve(__dirname, '../..', 'dist/bower-'+module),
      jsFile: 'ui-'+module+'.js',
      bundleFile: 'ui-'+module+'-tpls.js',
      jsModule: '\n', //extra modules are empty, src modules only
      bundleModule: '\n',
      htmlModule: '\n'
    });
    var repo = bowerName(module);

    gutil.log('[bower] Pushing', repo, '...');

    var bowerJson = makeBowerJson(module, moduleConfig);
    var readme = template(fs.readFileSync(__dirname + '/bower-readme.tpl.md'), {
      module: module,
      config: moduleConfig
    });

    bowerJson = JSON.stringify(bowerJson, null, 2);

    return async.eachSeries([
      scripts.bind(scripts, gulp, moduleConfig),
      fs.writeFile.bind(fs, moduleConfig.dist+'/bower.json', bowerJson),
      fs.writeFile.bind(fs, moduleConfig.dist+'/README.md', readme),
      createRepoIfNotExists,

      taskUtils.asyncSpawn(__dirname+'/bower.sh', [
        moduleConfig.dist,
        moduleConfig.pkg.version,
        process.env.GH_TOKEN+'@github.com:'+githubOrg+'/'+repo
      ], {})
    ], taskUtils.asyncIterator, callback);

    function createRepoIfNotExists(done) {
      github.repos.get({
        user: githubOrg,
        repo: repo
      }, function(err, data) {
        if (err && err.code === 404) {
          //404 -> create repo
          github.repos.createFromOrg({
            org: githubOrg,
            name: repo
          }, done);
        } else if (err) {
          done(err);
        } else {
          done(null, data);
        }
      });
    }

  }
}

function makeBowerJson(module, config) {
  var dependencies = {};
  getDeps(module).forEach(function(dep) {
    dependencies[bowerName(dep)] = config.pkg.version;
  });
  return {
    name: bowerName(module),
    license: 'MIT',
    version: config.pkg.version,
    author: {
      name: 'https://github.com/angular-ui/bootstrap/graphs/contributors'
    },
    dependencies: dependencies,
    main: config.bundleFile
  };
}

