'use strict';

var app = app || {};

((module) => {
  const updateView = {};

  updateView.initUpdatePage = () => {
    $('.container').hide();
    $('.update-View').show();
    let template = Handlebars.compile($('#update-template').text());
    $('.update-View').append(template);

  };

  module.updateView = updateView;
})(app);