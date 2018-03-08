'use strict';

page('/', app.gameView.initGamePage);

page('/about', app.aboutView.initAboutPage);

page('/login', app.loginView.initLoginPage);

page('/logout', app.loginView.initLogout);

page('/update', app.updateView.initUpdatePage);

// page('/history', app.historyView.initHistoryPage);

page('/history'
  , (ctx) => app.Game.fetchAll(() => app.historyView.initHistoryPage(ctx))
);

page();