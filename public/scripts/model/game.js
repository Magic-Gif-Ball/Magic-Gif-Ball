'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function(module) {

  //do we want an error view?
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

//module
})(app)

