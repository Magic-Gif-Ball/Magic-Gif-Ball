'use strict';

var app = app || {};

(module => {

  const historyView = {};

  historyView.initHistoryPage = function() {
    $('.container').hide();
    $('.history').empty();
    $('.history-View').show();
    module.Game.all.map(game => $('.history').append(game.toHtml()));
    $('.delete-btn').on('click', function() {
      module.Game.destroy($(this).data('id'));
    });
  };

  module.historyView = historyView;

})(app);