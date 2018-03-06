'use strict';

page('/', app.gameView.initGamePage);

page('/about', app.aboutView.initAboutPage);

page('/login', app.loginView.initLoginPage);

page('/logout', app.loginView.initLogout);

page();