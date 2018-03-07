'use strict';
var app = app || {};

(function(module) {

  const historyView = {};


  //when click history button, trigger history view and populate history
  historyView.initHistoryPage = function(ctx, next) {
    $('.container').hide();
    $('.history').empty();
    $('.history-View').show();
    module.Game.all.map(game => $('.history').append(game.toHtml()));
    next()
  };


  module.historyView = historyView;

})(app)