'use strict';
var app = app || {};
// const __API_URL__ = 'http://localhost:3000';

(function(module) {
  const loginView = {};

  loginView.initLoginPage = function() {
    $('.container').hide();
    $('.login-View').show();

    $('#login-form').on('submit', (event) => {
      event.preventDefault();
      // let userId = event.target.userName.value;
      localStorage.loggedIn = true;
      localStorage.username = event.target.userName.value;
      let tagArray = app.Game.randomArray.toString();

      let data = {
        userId: event.target.userName.value,
        tagArray: tagArray
      };

      $.post(`${__API_URL__}/addUser`, data)
        .then(() => page('/'));
    });
  };

  loginView.initLogout = function() {
    localStorage.clear();
    page('/');
  };

  module.loginView = loginView;
})(app);
