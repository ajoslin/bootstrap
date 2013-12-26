var sh = require('shelljs');
sh.config.silent = true;
var fs = require('fs');
var request = require('request');
var q = require('q');

//Simple string formatter to make code more readable & easier to write.
//Example: //'banana $0 elephant $1'.format('monkey', 'mango') 
//           --> 'banana monkey elephant mango'
String.prototype.format = function() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(prev, current, index) {
    return prev.replace(new RegExp('\\$'+index, 'g'), current);
  }, this);
};

var MODULE_REGEX = /angular\.module\(*.*\)/;
var GITHUB_ORG = 'angular-ui-bootstrap-bower-test';
var SHOULD_REGISTER_BOWER = false;

module.exports = function bumpBowerRepository(module, pkg, projectRoot) {
  function readProjectFile(path) {
    return fs.readFileSync('$0/$1'.format(projectRoot, path));
  }
  var repo = 'bower-bootstrap-$0'.format(module.name);
  var repoIsNew = sh.exec(
    'git ls-remote git://github.com/$0/$1'.format(GITHUB_ORG, repo),
    {silent:true} //always silence this commnd because so many errors from it we don't care about
  ).code !== 0;

  console.log('Updating bower component for $0 module...'.format(module.name));

  return checkoutRepo(repo, module, repoIsNew).then(function(gitDir) {
    var bowerJson = createBowerJson(module);

    bowerJson.version = pkg.version;

    var js = module.srcFiles.map(readProjectFile).join('\n');
    var tpljs = module.tpljsFiles.map(readProjectFile).join('\n');
    var jsBundled = js + '\n' + tpljs;
    jsBundled = jsBundled.replace(
      MODULE_REGEX,
      "angular.module($0, [$1])".format(module.moduleName, module.tplModules)
    );

    fs.writeFileSync('$0/ui-$1.js'.format(gitDir, module.name), js);
    fs.writeFileSync('$0/ui-$1-tpls.js'.format(gitDir, module.name), jsBundled);
    fs.writeFileSync('$0/bower.json'.format(gitDir), 
                     JSON.stringify(bowerJson, null, 2));

    if (repoIsNew) {
      sh.exec('bower register $0 git://github.com/$1/$0.git'.format(GITHUB_ORG, repo));
    }

    pushRepo(gitDir, pkg);

    if (repoIsNew) {
      console.log('Bower component for $0 was created and registered at $1!'.format(module.name, bowerJson.name));
    } else {
      console.log('Bower component $0 is now up-to-date!'.format(bowerJson.name));
    }
  });
};

function checkoutRepo(repo, module, repoIsNew) {
  var gitDir = '$0/$1'.format(process.env.HOME, repo);
  var sshUrl = 'https://$0@github.com/$1/$2.git'
            .format(process.env.GH_TOKEN, GITHUB_ORG, repo);
  var deferred = q.defer();

  sh.rm('-rf', gitDir);
  sh.exec('git config --global user.email "travis@travis-ci.org"');
  sh.exec('git config --global user.name "Travis"');

  //Clone if repo already exists
  if (!repoIsNew) {
    sh.exec('git clone $0 $1'.format(sshUrl, gitDir));
    sh.cd(gitDir);
    deferred.resolve(gitDir);
  //Init repo if not exists
  } else {
    sh.mkdir('-p', gitDir);
    sh.cd(gitDir);
    sh.exec('git init .');
    sh.exec('git remote add origin $0'.format(sshUrl));

    request({
      url: 'https://api.github.com/orgs/$0/repos'.format(GITHUB_ORG),
      method: 'POST',
      headers: {
        'User-Agent': 'angular-bootstrap-build',
        'Content-Type': 'application/json'
      },
      qs: {
        access_token: process.env.GH_TOKEN
      },
      body: JSON.stringify({name: repo})
    }, function(error, response, body) {
      body = JSON.parse(body);
      deferred.resolve(gitDir);
    });
    
  }
  return deferred.promise;
}

function pushRepo(gitDir, pkg) {
  sh.cd(gitDir);
  sh.exec('git add -A');
  sh.exec('git commit -am "release: v$0"'.format(pkg.version));
  sh.exec('git tag v$0'.format(pkg.version));
  sh.exec('git push --tags origin master');
}

function createBowerJson(module) {
  return {
    name: 'angular-bootstrap-ui-$0'.format(module.name),
    license: 'MIT',
    version: '0.0.0',
    author: {
      name: "https://github.com/angular-ui/bootstrap/graphs/contributors"
    },
    main: ['ui-$0-tpls.js'.format(module.name)]
  };
}
