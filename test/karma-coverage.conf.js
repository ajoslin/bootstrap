
module.exports = function(config) {
  require('./karma.conf.js')(config);

  config.set({
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/*/*.js': ['coverage'],
      '**/*.html': ['ng-html2js']
    },
  });
};
