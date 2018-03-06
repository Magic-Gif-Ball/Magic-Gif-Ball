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
    $.get(`${__API_URL__}/api/v1/gif/random`)
      .then(result => {
        console.log(result);
        $('#question-form img').attr('src', result);
      });
  };


  module.Game = Game;
//module
})(app);

