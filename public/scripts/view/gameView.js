'use strict';
var app = app || {};

(function(module) {


  const gameView = {};

  gameView.initGamePage = function(ctx, next) {
    $('.container').hide();
    $('.game-View').show();
    $('#question-form').on('submit', (event) => {
      event.preventDefault();
      //save question input
      let question = {
        question: event.target.questionToGifBall.value
      };
      module.Game.fetchGif();
    });

    //other stuff
  };




  module.gameView = gameView;

})(app);