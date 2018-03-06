'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function(module) {
  const Game = {};
  //do we want an error view?
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  Game.fetchGif = function() {
    let index = Game.randomArrayIndex();
    let tag = randomArray[index];
    console.log(tag);
    // $.get(`${__API_URL__}/api/v1/gif/random`)
    $.ajax({
      url: `${__API_URL__}/api/v1/gif/random`,
      data: {tag}
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


  module.Game = Game;
//module
})(app);

