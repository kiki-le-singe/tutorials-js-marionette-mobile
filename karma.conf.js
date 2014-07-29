// Karma configuration
// Generated on Tue Mar 04 2014 18:07:05 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '.',


    // frameworks to use
    frameworks: ['mocha', 'requirejs', 'chai-sinon', 'chai-jquery', 'jquery'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'app/bower_components/backbone/backbone.js', included: false},
      {pattern: 'app/bower_components/underscore/underscore.js', included: false},
      {pattern: 'app/bower_components/handlebars/handlebars.runtime.amd.js', included: false},
      {pattern: 'app/bower_components/backbone.marionette/lib/core/backbone.marionette.js', included: false},
      {pattern: 'app/bower_components/backbone.babysitter/lib/backbone.babysitter.js', included: false},
      {pattern: 'app/bower_components/backbone.wreqr/lib/backbone.wreqr.js', included: false},
      {pattern: 'app/bower_components/backbone.syphon/lib/amd/backbone.syphon.js', included: false},
      {pattern: 'app/bower_components/requirejs-text/text.js', included: false},
      {pattern: 'app/bower_components/requirejs-plugins/src/json.js', included: false},
      {pattern: 'app/bower_components/require.replace/require.replace.js', included: false},
      {pattern: 'app/fixtures.js', included: false},
      {pattern: '.tmp/scripts/templates.js', included: false},
      {pattern: 'app/scripts/**/*.js', included: false},
      {pattern: 'test/spec/**/*.js', included: false},

      'test/test-main.js',
    ],


    // list of files to exclude
    exclude: [
      'app/scripts/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'progress', 'coverage'],


    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },


    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
