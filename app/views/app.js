(function(){
  'use strict';

  var AppView = Backbone.View.Extend({
    el: $('movieCollectionApp')
  });

  app.views.app = new AppView();

}());
