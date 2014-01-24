# bootstrap - [AngularJS](http://angularjs.org/) directives specific to [Bootstrap](http://getbootstrap.com)

***

[![Build Status](https://secure.travis-ci.org/angular-ui/bootstrap.png)](http://travis-ci.org/angular-ui/bootstrap)
[![devDependency Status](https://david-dm.org/angular-ui/bootstrap/dev-status.png?branch=master)](https://david-dm.org/angular-ui/bootstrap#info=devDependencies)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/angular-ui/bootstrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Demo

Do you want to see directives in action? Visit http://angular-ui.github.io/bootstrap/!

## Quick Start

Installation is simple.  All that is required is bootstrap's CSS and AngularJS.

```html
<html>
<head>
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.js"></script>
  <script src="ui-bootstrap-tpls.js"></script>
</head>
<body>
  <script>
    angular.module('myApp', ['ui.bootstrap']);
  </script>
</body>
</html>
```

There are several ways to download our javascript files:

1. cdnjs: http://cdnjs.com/libraries/angular-ui-bootstrap/
2. bower: `bower install angular-ui-bootstrap`
3. bower for a specific component: `bower install angular-ui/bower-bootstrap-accordion`
4. direct download from github: https://github.com/angular-ui/bootstrap/tree/gh-pages#build-files
5. NuGeT: http://www.nuget.org/packages/Angular.UI.Bootstrap/

Don't worry, if you are not sure which file to take, opt for `ui-bootstrap-tpls-[version].min.js`.

## Supported browsers

Directives from this repository are automatically tested with the following browsers:
* Chrome (stable and canary channel)
* Firefox
* IE 9 and 10
* Opera
* Safari

Modern mobile browsers should work without problems.

**IE 8 is not officially supported at the moment**. This project is run by volunteers and with the current number of commiters
we are not in the position to guarantee IE8 support. If you need support for IE8 we would welcome a contributor who would like to take care about IE8.
Alternatively you could sponsor this project to guarantee IE8 support.

We believe that most of the directives would work OK after:
* including relevant shims (for ES5 we recommend https://github.com/kriskowal/es5-shim)
* taking care of the steps described in http://docs.angularjs.org/guide/ie

We are simply not regularly testing against IE8.

## Project philosophy

### Native, lightweight directives

We are aiming at providing a set of AngularJS directives based on Bootstrap's markup and CSS. The goal is to provide **native AngularJS directives** without any dependency on jQuery or Bootstrap's JavaScript.
It is often better to rewrite an existing JavaScript code and create a new, pure AngularJS directive. Most of the time the resulting directive is smaller as compared to the original JavaScript code size and better integrated into the AngularJS ecosystem.

### Customizability

All the directives in this repository should have their markup externalized as templates (loaded via `templateUrl`). In practice it means that you can **customize directive's markup at will**. One could even imagine providing a non-Bootstrap version of the templates!

### Take what you need and not more

Each directive has its own AngularJS module without any dependencies on other modules or third-party JavaScript code. In practice it means that you can **just grab the code for the directives you need** and you are not obliged to drag the whole repository.

### Quality and stability

Directives should work. All the time and in all browsers. This is why all the directives have a comprehensive suite of unit tests. All the automated tests are executed on each checkin in several browsers: Chrome, ChromeCanary, Firefox, Opera, Safari, IE9.
In fact we are fortunate enough to **benefit from the same testing infrastructure as AngularJS**!

## Support

If you are having problems making some directives work, there are several ways to get help:

* Live help in the IRC (`#angularjs` channel at the `freenode` network). Use this [webchat](https://webchat.freenode.net/) or your own IRC client.
* Ask a question in [stackoverflow](http://stackoverflow.com/) under the [angular-ui-bootstrap](http://stackoverflow.com/questions/tagged/angular-ui-bootstrap) tag.
* Write your question in our [mailing list](https://groups.google.com/forum/#!categories/angular-ui/bootstrap).

Project's issue on GitHub should be used discuss bugs and features.

## Contributing to the project

We are always looking for the quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution guidelines.

### Development
#### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install global dev dependencies: `npm install -g bower gulp`
* Instal local dev dependencies: `npm install && bower install` in repository directory

#### Development Commands
* `gulp` to jshint, build, test, and create docs
* `gulp build` to jshint & build
* `gulp jshint` to just jshint
* `gulp docs` to create docs
* `gulp test` for one-time test
* `gulp watch` to watch and re-run tests on change

####  Test coverage
Add the `--coverage` option (`gulp test --coverage`, `gulp watch --coverage`) to generate test coverage reports to the `coverage` folder.

### Customize templates

As mentioned, directives from this repository have all the markup externalized in templates. You might want to customize default
templates to match your desired look & feel, add new functionality etc.

The easiest way to override an individual template is to use the `<script>` directive:

```javascript
<script id="template/alert/alert.html" type="text/ng-template">
    <div class='alert' ng-class='type && "alert-" + type'>
        <button ng-show='closeable' type='button' class='close' ng-click='close()'>Close</button>
        <div ng-transclude></div>
    </div>
</script>
```

If you want to override more templates, it makes sense to store them as individual files and feed the `$templateCache` from those partials.
For people using Grunt as the build tool it can be easily done using the `grunt-html2js` plugin. You can also configure your own template url.
Let's have a look:

Your own template url is `views/partials/ui-bootstrap-tpls/alert/alert.html`.

Add "html2js" task to your Gruntfile
```
html2js: {
  options: {
    base: '.',
    module: 'my-ui-templates',
    rename: function (modulePath) {
      var moduleName = modulePath.replace('app/views/partials/ui-bootstrap-tpls/', '').replace('.html', '');
      return 'template' + '/' + moduleName + '.html';
    }
  },
  main: {
    src: ['app/views/partials/ui-bootstrap-tpls/**/*.html'],
    dest: 'public/my-ui-templates.js'
  }
}
```

Make sure to load your template.js file
`<script src="/my-ui-templates.js"></script>`

Inject the `my-ui-templates` module in your `app.js`
```
angular.module('myApp', [
  'ui.bootstrap',
  'my-ui-templates'
]);
```

Then it will work fine!

For more information visit: https://github.com/karlgoldstein/grunt-html2js

### Release

- `gulp release-pre` to remove '-snapshot' from version, commit, tag, changelog, and push to gh-pages & master
- `gulp bower` to push current version of all modules to bower
- `gulp cdnjs` to open pull request for new version to cdnjs
- `gulp release-post --bump=major|minor|patch` to bump version, add -snapshot prefix, and commit/push
- `gulp release --bump=major|minor|patch` to `release-pre, bower, cdnjs, release-post`

#### Release Authorization / Permissions

You need the following two things to run the release tasks successfully:

1. Git permission to push to angular-ui/bootstrap organization
2. A github oauth token exported as environment variable `GH_TOKEN`. The release scripts will tell you if you haven't done this.

  To create a new token, follow the first section in the [Github create-a-token tutorial](https://help.github.com/articles/creating-an-access-token-for-command-line-use).  Then, take the token and export it in your .bashrc:

  ```sh
  export GH_TOKEN=123abc456def789ghi
  ```

  Alternatively, you can just use the token whenever you run the release process:

  ```sh
  GH_TOKEN=123abc456def789ghi gulp release --bump=patch
  ```
