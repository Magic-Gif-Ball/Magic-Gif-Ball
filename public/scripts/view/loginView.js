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
      let loginName = event.target.userName.value;
      localStorage.username = loginName;
      localStorage.tagArray = app.Game.randomArray;
      $('#loginName').text(` ${loginName}`);
      let tagArray = app.Game.randomArray.toString();
      let data = {
        username: loginName,
        tagArray: tagArray
      };
      $.post(`${__API_URL__}/addUser`, data)
        .then((response) => {
          let customArray = response.responses.split(',');
          localStorage.tagArray = '';
          localStorage.tagArray = customArray;
          localStorage.userId = response.id;
        })
        .catch(console.err)
        .then(() => page('/'))
        .catch(console.err);
    });
  };

  loginView.initLogout = function() {
    localStorage.clear();
    $('#loginName').empty();
    page('/');
  };

  module.loginView = loginView;
})(app);
