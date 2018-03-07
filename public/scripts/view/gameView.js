'use strict';
var app = app || {};

(function(module) {


  const gameView = {};

  gameView.initGamePage = function(ctx, next) {
    $('.container').hide();
    $('.game-View').show();
    if (!localStorage.tagArray) localStorage.tagArray = app.Game.randomArray;
    $('#question-form').on('submit', (event) => {
      event.preventDefault();
      //save question input
      let question = event.target.questionToGifBall.value;
      module.Game.fetchGif(question);
    });
  };




  module.gameView = gameView;

})(app);