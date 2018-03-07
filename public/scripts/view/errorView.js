'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = function(err) {
    $('.container').hide();
    $('.error-View').show();
    $('#error-message').empty();
    let template = Handlebars.compile($('#error-template').text());
    $('.error-View').append(template(err));
  };

  module.errorView = errorView;
})(app);