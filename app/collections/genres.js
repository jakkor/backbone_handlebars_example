(function(){
  'use strict';

  app.collections.Genres = Backbone.Collection.Extend({
    model: app.GenreModel,

    localStorage: new Backbone.LocalStorage("genres-backbone")
  });

}());
