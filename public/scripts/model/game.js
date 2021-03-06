'use strict';

var app = app || {};
// const __API_URL__ = 'http://localhost:3000';
const __API_URL__ = 'https://magic-gif-ball.herokuapp.com';

((module) => {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  Game.fetchGif = function(questionText) {
    let index = Game.randomArrayIndex();
    let array = localStorage.tagArray.split(',');
    let tag = array[index];
    let user = localStorage.userId;

    $.ajax({
      url: `${__API_URL__}/api/v1/gif/random`,
      data: {tag, questionText, user}
    })
      .then(result => {
        $('#retrieved-gif').attr('src', result);
        $('#question-form p').text(tag);
      })
      .catch(console.error);
    page('/');
  };

  Game.randomArray = ['perfect', 'no no no', 'either way', 'dumb', 'who knows', 'no way', 'hell yes', 'i dont care'];

  Game.randomArrayIndex = () => {
    return Math.floor(Math.random() * (Game.randomArray.length - 1 - 0 + 1)) + 0;
  };

  function Game(rawGameObj) {
    Object.keys(rawGameObj).forEach(key => this[key] = rawGameObj[key]);
  }

  Game.prototype.toHtml = function() {
    let template = Handlebars.compile($('#gif-history-template').text());
    return template(this);
  };

  //array of objects that are question-gif pairs
  Game.all = [];

  Game.loadAll = rows => Game.all = rows.sort((a, b) => b.questions_id - a.questions_id)
    .map(game => new Game(game));

  Game.fetchAll = callback => {
    let user1 = localStorage.userId;
    $.ajax({
      url: `${__API_URL__}/api/v1/games`,
      data: {user1}
    })
      .then(Game.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  Game.updateTags = (updateObject) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/gif/update`,
      method: 'PUT',
      data: updateObject
    })
      .then(() => page('/'));
  };

  Game.destroy = questionId => {
    $.ajax({
      url: `${__API_URL__}/api/v1/gif/${questionId}`,
      method: 'DELETE',
    })
      .then(() => page('/history'))
      .catch(errorCallback);
  };

  module.Game = Game;

})(app);

$('#hamburger-icon').click(function(){
  $('#menu').toggle();
});

$('#ask-button').click(function(){
  $('#retrieved-gif, .game-View input, .game-View p, .game-View button').toggle();
  $('.game-View').effect('shake');
  $('#retrieved-gif, .game-View input, .game-View p, .game-View button').delay(1000).fadeToggle();
});