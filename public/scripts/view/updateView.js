'use strict';

var app = app || {};

((module) => {
  const updateView = {};

  updateView.initUpdatePage = () => {
    $('.container').hide();
    $('.update-View').show();
    let userInfo = {
      user_id: localStorage.userId,
      tagArray: localStorage.tagArray.split(','),
    };
    let template = Handlebars.compile($('#update-template').text());
    $('.update-View').append(template(userInfo));
  };

  

  module.updateView = updateView;
})(app);