'use strict';

var app = app || {};

(module => {

  const gameView = {};

  gameView.initGamePage = () => {
    $('.loggedIn').hide();
    $('.loggedOut').show();
    $('.container').hide();
    $('#menu').hide();
    $('.game-View').show();
    if (!localStorage.tagArray) localStorage.tagArray = app.Game.randomArray;
    if (localStorage.loggedIn) {
      $('.loggedIn').show();
      $('.loggedOut').hide();
    }
    $('#question-form').off();
    $('#question-form').on('submit', (event) => {
      // window.navigator.vibrate(200);
      // console.log('vibrate');
      event.preventDefault();
      let question = event.target.questionToGifBall.value;
      module.Game.fetchGif(question);
    });
  };

  module.gameView = gameView;

})(app);