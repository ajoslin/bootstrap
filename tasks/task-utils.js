
var gutil = require('gulp-util');
var cp = require('child_process');
var Github = require('github');

module.exports = {
  getAuthenticatedGithub: getAuthenticatedGithub,
  asyncSpawn: asyncSpawn,
  asyncIterator: asyncIterator
};

function getAuthenticatedGithub(errorName) {
  var token = getGithubToken(errorName);
  var github = new Github({ version: '3.0.0' });
  github.authenticate({
    type: 'oauth',
    token: token
  });
  return github;
}

function getGithubToken(taskName) {
  var token = process.env.GH_TOKEN;
  if (!token) {
    throw new Error('No github token found.\nPlease expose a github API token as environment variable GH_TOKEN and run `' + taskName + '` to try again.\nRead the \'Development\' section of README for more information.');
  }
  return token;
}

function asyncSpawn(cmd, args) {
  return function(done) {
    cp.spawn(cmd, args, gutil.env.verbose ? {stdio: 'inherit'} : {})
    .on('exit', function(error, stdout, stderr) {
      if (stderr) {
        done('"' + cmd + '" failed.\n' + stderr);
      } else {
        done();
      }
    });
  };
}

function asyncIterator(value, done) {
  value(done);
}

//runs git commands run inside moduleConfig.dist folder
function gitExecFn(dist, verbose) {
  return function(cmd, done) {
    if (verbose) {
      console.log(cmd);
    }
    cp.exec(cmd, {
      env: {
        GIT_DIR: dist + '/.git',
        GIT_WORK_TREE: dist
      }
    }, done);
  };
}
