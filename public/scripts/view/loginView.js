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
      let userId = event.target.userName.value;
      page('/');
    });
  };

  loginView.initLogout = function() {
    localStorage.clear();
    page('/');
  };

  module.loginView = loginView;
})(app);
