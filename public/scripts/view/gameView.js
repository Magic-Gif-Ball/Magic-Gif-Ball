'use strict';
var app = app || {};

(function(module) {

  const gameView = {};

  gameView.initGamePage = () => {
    $('.loggedIn').hide();
    $('.container').hide();
    $('.game-View').show();
    if (!localStorage.tagArray) localStorage.tagArray = app.Game.randomArray;
    if (localStorage.loggedIn) $('.loggedIn').show();
    $('#question-form').off();
    $('#question-form').on('submit', (event) => {
      event.preventDefault();
      console.log('shaking');
      let question = event.target.questionToGifBall.value;
      module.Game.fetchGif(question);
    });
  };

  module.gameView = gameView;

})(app);