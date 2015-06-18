(function(){
  'use strict';

  var GenresCollection = Backbone.Collection.extend({
    model: app.GenreModel,

    localStorage: true
  });

  app.collections.genres = new GenresCollection();

}());
