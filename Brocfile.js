var concatenate = require('broccoli-concat'),
    pickFiles   = require('broccoli-static-compiler'),
    uglifyJs    = require('broccoli-uglify-js'),
    mergeTrees  = require('broccoli-merge-trees'),
    less  = require('broccoli-less'),
    broccoliHandlebars = require('broccoli-handlebars-precompiler'),
    env = require('broccoli-env').getEnv(),
    IS_PRODUCTION_ENV = (env == 'production' ? true : false),
    Handlebars = require('Handlebars');

var app = pickFiles('.', {
  srcDir: '/',
  files: ['app/**/*.js','assets/**/*.less', 'app/templates/**/*.hbs'],
  destDir: '.'
});

app = less(app);
app = broccoliHandlebars(app, {
    srcDir: 'app/templates',
    namespace: 'app.templates'
  }
);

//Concentate all Shop js files
app = concatenate(app, {
    inputFiles : [
      'app/app.js',
      'app/templates/**/*.js',
      'app/collections/**/*.js',
      'app/models/**/*.js',
      'app/routes/**/*.js',
      'app/views/**/*.js'
    ],
    outputFile : '/assets/scripts.js',
});

var indexFile = pickFiles('public', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '.'
});

var bowerTrees = concatenate('vendor', {
    inputFiles : [
      'jquery/dist/jquery.js',
      'underscore/underscore.js',
      'backbone/backbone.js',
      'backbone-localstorage/backbone-localstorage.js',
      'bootstrap/dist/js/bootstrap.js',
      '../node_modules/handlebars/dist/handlebars.runtime.js'
    ],
    outputFile : '/assets/vendor.js',
});

if (IS_PRODUCTION_ENV) {
  app = uglifyJs(app, {
      compress: true
  });
  bowerTrees = uglifyJs(bowerTrees, {
      compress: true
  });
}

module.exports = mergeTrees([app, indexFile, bowerTrees]);
