'use strict';
var app = app || {};

(function(module) {

  const historyView = {};

  //when click history button, trigger history view and populate history
  historyView.initHistoryPage = function(ctx) {
    $('.container').hide();
    $('.history').empty();
    $('.history-View').show();
    module.Game.all.map(game => $('.history').append(game.toHtml()));
    $('#delete-btn').on('click', function() {
      console.log($(this).data('id'));
      module.Game.destroy($(this).data('id'));
    });


    // next();
  };

  module.historyView = historyView;

})(app);