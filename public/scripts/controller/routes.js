'use strict';

page('/', app.gameView.initGamePage);

page('/about', app.aboutView.initAboutPage);

page('/login', app.loginView.initLoginPage);

page('/logout', app.loginView.initLogout);

// page('/history', app.historyView.initHistoryPage);

page('/history'
  , (ctx, next) => app.Game.fetchAll(() => app.historyView.initHistoryPage(ctx, next))
);

//DONE
//single user route
//DO NOT put in the fetchUser function from game.js

page('/userHistory', ctx => app.Game.fetchUser(ctx, app.historyView.initHistoryPage));

page();