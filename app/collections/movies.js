(function(){
  'use strict';

  var MoviesCollection = Backbone.Collection.extend({
    model: app.MovieModel,

    localStorage: true
  });

  app.collections.movies = new MoviesCollection();

}());
