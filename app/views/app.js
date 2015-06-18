(function(){
  'use strict';

  var AppView = Backbone.View.extend({
    el: $('#movieCollectionApp'),

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(app.templates.app);
    }
  });

  app.views.app = new AppView();

}());
