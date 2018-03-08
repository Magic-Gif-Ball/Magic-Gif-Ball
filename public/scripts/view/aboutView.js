'use strict';

var app = app || {};

(module => {

  const aboutView = {};

  aboutView.initAboutPage = function() {
    $('.container').hide();
    $('.about-Us').show();
  };

  module.aboutView = aboutView;

})(app);