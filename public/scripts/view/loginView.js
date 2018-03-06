'use strict';
var app = app || {};

(function(module) {
  const loginView = {};

  loginView.initLoginPage = function() {
    $('.container').hide();
    $('.login-View').show();

    $('#login-form').on('submit', (event) => {
      event.preventDefault();
      localStorage.loggedIn = true;
      localStorage.username = event.target.userName.value;
      let tagArray = app.Game.randomArray.toString();
      let data = {
        username: event.target.userName.value,
        tagArray: tagArray
      };

      $.post(`${__API_URL__}/addUser`, data)
        .then(() => page('/'))
        .catch(console.err);
    });
  };

  loginView.initLogout = function() {
    localStorage.clear();
    page('/');
  };

  module.loginView = loginView;
})(app);
