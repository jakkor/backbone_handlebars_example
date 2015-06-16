(function(){
  'use strict';

  var GenresCollection = Backbone.Collection.Extend({
    model: app.GenreModel,

    localStorage: new Backbone.LocalStorage("genres-backbone")
  });

  app.collections.genres = new GenresCollection();

}());
