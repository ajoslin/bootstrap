var fs = require('fs');
var path = require('path');

module.exports = function(opts) {
  opts = opts || {};
  var modules = opts.modules || fs.readdirSync(__dirname+'/src');
  var templates = readTemplates(modules);

  var dist = path.resolve(opts.dist || 'dist');
  //Don't use require('.package') here because we always need newest version
  var pkg = JSON.parse(fs.readFileSync('./package.json'));
  var jsFile = opts.jsFile || 'ui-bootstrap-<%=pkg.version%>.js';
  var bundleFile = opts.bundleFile || 'ui-bootstrap-tpls-<%=pkg.version%>.js';
  var htmlModule = opts.htmlModule ||
    'angular.module("ui.bootstrap.tpls", [<%= modules %>]);\n\n';
  var jsModule = opts.jsModule ||
    'angular.module("ui.bootstrap", [<%= modules %>]);\n\n';
  var bundleModule = opts.bundleModule ||
    'angular.module("ui.bootstrap", ["ui.bootstrap.tpls",<%= modules %>]);\n\n';

  return {
    pkg: pkg,
    ngversion: '1.2.10',
    bsversion: '3.0.3',
    dist: dist,
    modules: modules,
    templates: templates,
    globs: {
      //We add an underscore to all these expansions because glob {} expansions don't work if
      //the modules array contains only one item. The _ just makes there be at least
      //two items so expansion works
      js: 'src/{_,'+modules+'}/*.js',
      docs: 'src/{_,'+modules+'}/docs/**/*',
      html: 'template/{_,'+modules+'}/*.html',
    },
    jsFile: jsFile,
    jsModule: jsModule,
    bundleFile: bundleFile,
    bundleModule: bundleModule,
    htmlModule: htmlModule,
    banner:
      '/*\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Version: <%= pkg.version %> - <%= timestamp() %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n\n'
  };
};

function readTemplates(modules) {
  var templates = [];
  modules.forEach(function(name) {
    if (fs.existsSync(__dirname + '/template/' + name)) {
      fs.readdirSync(__dirname + '/template/' + name).forEach(function(fname) {
        templates.push('template/' + name + '/' + fname);
      });
    }
  });
  return templates;
}
