'use strict';
var app = app || {};

(function(module) {


  const gameView = {};

  gameView.initGamePage = function(ctx, next) {
    $('.container').hide();

    $('.game-View').show();

    //other stuff
  };




  module.gameView = gameView;

})(app)