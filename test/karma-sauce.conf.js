module.exports = function(config) {
  require('./karma.conf.js')(config);

  //username: angular-bootstrap
  //password: password
  config.set({
    sauceLabs: {
      testName: 'angular-bootstrap',
      username: 'angular-bootstrap',
      accessKey: '98f2dc8d-4c17-439b-9442-62447d3487eb',
      startConnect: true,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },
    browserDisconnectTimeout: 60 * 1000,
    browserNoActivityTimeout: 60 * 1000,
    browserDisconnectTolerance: 2,
    transports: ['xhr-polling'],
    browsers: [
      //'sauce_ios',
      'sauce_safari',
      'sauce_android',
      'sauce_chrome',
      'sauce_firefox',
      'sauce_ie9',
      'sauce_ie10',
      'sauce_ie11'
    ],
    customLaunchers: {
      'sauce_ios': {
        base: 'SauceLabs',
        platform: 'OS X 10.8',
        browserName: 'iphone',
        version: '6'
      },
      'sauce_safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.9',
        version: '7'
      },
      'sauce_android': {
        base: 'SauceLabs',
        platform: 'Linux',
        browserName: 'android',
        version: '4.0'
      },
      'sauce_chrome': {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      'sauce_firefox': {
        base: 'SauceLabs',
        platform: 'Linux',
        browserName: 'firefox',
        version: '26'
      },
      'sauce_ie9': {
        base: 'SauceLabs',
        platform: 'Windows 2008',
        browserName: 'internet explorer',
        version: '9'
      },
      'sauce_ie10': {
        base: 'SauceLabs',
        platform: 'Windows 2012',
        browserName: 'internet explorer',
        version: '10'
      },
      'sauce_ie11': {
        base: 'SauceLabs',
        platform: 'Windows 8.1',
        browserName: 'internet explorer',
        version: '11'
      }
    },
  });
};
