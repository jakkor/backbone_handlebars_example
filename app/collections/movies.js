(function(){
  'use strict';

  var MoviesCollection = Backbone.Collection.Extend({
    model: app.MovieModel,

    localStorage: new Backbone.LocalStorage("movies-backbone")
  });

  app.collections.movies = new MoviesCollection();

}());
