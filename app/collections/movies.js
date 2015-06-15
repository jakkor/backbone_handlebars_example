(function(){
  'use strict';

  app.collections.Movies = Backbone.Collection.Extend({
    model: app.MovieModel,

    localStorage: new Backbone.LocalStorage("movies-backbone")
  });

}());
