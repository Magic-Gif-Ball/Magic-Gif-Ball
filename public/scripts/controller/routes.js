'use strict';

page('/', app.gameView.initGamePage);

page('/about', app.aboutView.initAboutPage);

page('/login', app.loginView.initLoginPage);

page('/logout', app.loginView.initLogout);

// page('/history', app.historyView.initHistoryPage);

page('/history'
  , (ctx, next) => app.Game.fetchAll(() => app.historyView.initHistoryPage(ctx, next))
);

page();