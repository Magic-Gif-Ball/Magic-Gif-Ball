'use strict';

var app = app || {};
const __API_URL__ = 'http://localhost:3000';
// const __API_URL__ = 'https://magic-gif-ball.herokuapp.com';

(function(module) {
  // const Game = {};

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  // Game.fetchGif = function(question) {
  //   $.get(`${__API_URL__}/api/v1/gif/random`, question)
  //     .then(result => {
  //       console.log(result);
  //       $('#question-form img').attr('src', result);
  //     });
  // };

  Game.fetchGif = function(questionText) {
    let index = Game.randomArrayIndex();
    let array = localStorage.tagArray.split(',');
    let tag = array[index];
    // let userid;
    $.ajax({
      url: `${__API_URL__}/api/v1/gif/random`,
      data: {tag, questionText}
    })
      .then(result => {
        $('#question-form img').attr('src', result);
        $('#question-form p').text(tag);
      });
  };

  Game.randomArray = ['perfect', 'no no no', 'either way', 'dumb', 'who knows', 'no way', 'hell yes', 'i dont care'];

  Game.randomArrayIndex = () => {
    return Math.floor(Math.random() * (Game.randomArray.length - 1 - 0 + 1)) + 0;
  };

  //get gifs and questions from database
  function Game(rawGameObj) {
    Object.keys(rawGameObj).forEach(key => this[key] = rawGameObj[key]);
  }

  Game.prototype.toHtml = function() {
    let template = Handlebars.compile($('#gif-history-template').text());
    return template(this);
  };

  //array of objects that are question-gif pairs
  Game.all = [];


  Game.loadAll = rows => Game.all = rows.sort((a, b) => b.questions_id - a.questions_id).map(game => new Game(game));
  Game.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/games`)
      .then(Game.loadAll)
      .then(callback)
      .catch(errorCallback);

  //DONE fetchOne (fetchUser) here for history username
  Game.fetchUser = (ctx, callback) =>
    $.get(`${__API_URL__}/api/v1/userHistory/${ctx.params.username}`)
      .then(callback)
      .catch(errorCallback);

  module.Game = Game;

})(app);

