define([
  'socketio'
], function (SocketIo) {
  "use strict";

  return {
    getLogger: function (category, level, appender, url) {
      var myLogger = log4javascript.getLogger(category);
      myLogger.setLevel(log4javascript.Level[level || 'DEBUG']);

      if (appender && url && log4javascript.AjaxAppender) {
        var ajaxAppender = new log4javascript.AjaxAppender(url);
        ajaxAppender.setThreshold(log4javascript.Level.ERROR);
        myLogger.addAppender(ajaxAppender);
      }

      if (log4javascript.BrowserConsoleAppender) {
        var browserAppender = new log4javascript.BrowserConsoleAppender();
        var layout = new log4javascript.PatternLayout('[%c] %d (duration - %r) %p - %m%n');
        browserAppender.setLayout(layout);
        myLogger.addAppender(browserAppender);
      }

      return myLogger;
    },

    getSocketIO: function () {
      var notiChannel = SocketIo.connect('/notiChannel');

      return notiChannel;
    },

    checkAuthRemember: function () {
      var rememberSignin = localStorage.getItem('rememberSignin');

      if (rememberSignin != 'yes') {
        localStorage.setItem('signStatus', 'signedout');
      }
    },

    checkAuth: function () {
      var signStatus = localStorage.getItem('signStatus');
      if (signStatus != 'signedin') {
        window.location = '/?#signin';
        return false;
      }
      return true;
    }
  };
});