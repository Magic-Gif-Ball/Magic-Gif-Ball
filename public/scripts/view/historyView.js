'use strict';
var app = app || {};

(function(module) {

  const historyView = {};


  //when click history button, trigger history view and populate history
  historyView.initHistoryPage = function(ctx, next) {
    $('.container').hide();
    $('.history').empty();
    if (localStorage.username) {
      //assign the history to be associated with their username
      // server-side request
      // $.get
      // 1 get the username from local storage
      // 2 send to server.js
      //
      //don't do get request until if statement is hit
      //do the GET logic here
      //
      let currentUserName = localStorage.username;


      $.ajax({
        url: `${__API_URL__}/api/v1/userHistory/${currentUserName}`,
        //render to page
        //or whatever
      })
      //do stuff here!!!!
        .then(console.log);

      $('.history-View').show();
    }

    else {
      $('.not-loggedIn-history-View').show();
    }
    
    module.Game.all.map(game => $('.history').append(game.toHtml()));
    // next();
  };


  module.historyView = historyView;

})(app)