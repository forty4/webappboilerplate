define([
  'backbone',
  'vm',
  'common'
], function (Backbone, Vm, Common) {
  'use strict';

  var logger = Common.getLogger('AppRouter');

  var AppRouter = Backbone.Router.extend({
    routes: {
      'signin': 'signin',

      '*actions': 'defaultAction'
    }
  });

  var initialize = function (options) {
    var appView = options.appView,
      router = new AppRouter(options);

    Common.checkAuthRemember();

    router.on('route:defaultAction', function () {
      if(Common.checkAuth()) {
        require(['views/home/page'], function (HomePage) {
          var homePage = Vm.create(appView, 'HomePage', HomePage);
          homePage.render();
        });
      }
    });

    router.on('route:signin', function () {
      require(['views/signin/page'], function (SigninPage) {
        var signinPage = Vm.create(appView, 'SigninPage', SigninPage);
        signinPage.render();
      });
    });

    logger.info('AppRouter is initialized');

    Backbone.history.start();

    logger.info('Backbone.history is started');

    return router;
  };

  logger.info('AppRouter is defined');

  return {
    initialize: initialize
  };
});
