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
    $('.update-View').empty();
    let template = Handlebars.compile($('#update-template').text());
    $('.update-View').append(template(userInfo));

    $('#updateTag-form').on('submit', (event) => {
      event.preventDefault();
      userInfo.tagArray = [event.target.one.value, event.target.two.value, event.target.three.value, event.target.four.value,event.target.five.value,event.target.six.value,event.target.seven.value,event.target.eight.value].toString();
      localStorage.tagArray = userInfo.tagArray;
      module.Game.updateTags(userInfo);
    });
  };



  module.updateView = updateView;
})(app);