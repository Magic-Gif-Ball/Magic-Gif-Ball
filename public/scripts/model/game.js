'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function(module) {
  // const Game = {};
  //do we want an error view?
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
    let tag = randomArray[index];
    console.log(tag);
    // $.get(`${__API_URL__}/api/v1/gif/random`)
    $.ajax({
      url: `${__API_URL__}/api/v1/gif/random`,
      data: {tag, questionText}
    })
      .then(result => {
        console.log(result);
        $('#question-form img').attr('src', result);
      });
  };

  let randomArray = ['yes', 'no', 'maybe', 'try again', 'outlook unclear', 'hell no', 'hell yes'];

  Game.randomArrayIndex = () => {
    return Math.floor(Math.random() * (randomArray.length - 1 - 0 + 1)) + 0;
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
  
  Game.loadAll = rows => Game.all = rows.sort((a, b) => b.id - a.id).map(game => new Game(game));
  Game.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/games`)
      .then(Game.loadAll)
      .then(callback)
      .catch(errorCallback);


  module.Game = Game;
//module
})(app);

