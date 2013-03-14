// Require.js allows us to configure shortcut alias
require.config({
  baseUrl: '/scripts',
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'helpers': {
      deps: [
        'handlebars'
      ],
      exports: 'Helpers'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'socketio': {
      exports: 'SocketIo'
    }
  },
  paths: {
    jquery: '../components/jquery/jquery.min',
    underscore: 'vendor/lodash.min',
    backbone: 'vendor/backbone/backbone.min',
    bbStorage: 'vendor/backbone/backbone.localStorage-min',
    bbBinder: 'vendor/backbone/backbone.modelbinder.min',
    text: 'vendor/require/text',
    handlebars: 'vendor/handlebars-1.0.rc.1',
    helpers: 'vendor/handlebars-helpers',
    socketio: 'vendor/socketio/socket.io'
  }
});

require([
  'views/app',
  'routers/router',
  'vm',
  'common'
], function (AppView, Router, Vm, Common) {
  var logger = Common.getLogger('Main');

  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  window.router = Router.initialize({appView: appView});
});
