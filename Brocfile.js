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
  files: ['app/**/*.js','assets/**/*.less'],
  destDir: '.'
});

//Concentate all Shop js files
app = concatenate(app, {
    inputFiles : [
      '**/*.js'
    ],
    outputFile : '/assets/scripts.js',
});

if (IS_PRODUCTION_ENV) {
  app = uglifyJs(app, {
      compress: true
  });
}


var indexFile = pickFiles('public', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '.'
});

app = less(app);

module.exports = mergeTrees([app, indexFile]);
