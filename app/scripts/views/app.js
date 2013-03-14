define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'helpers',
  'text!templates/layout.html',
  'vm',
  'common'
], function ($, _, Backbone, Handlebars, Helpers, layoutTemplate, Vm, Common) {
  'use strict';
  var logger = Common.getLogger('AppView');

  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '.container',

    // Compile our stats template
    template: Handlebars.compile(layoutTemplate),

    render: function () {
      var that = this;
      $(this.el).html(this.template);

      require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });
      logger.info('AppView instance is rendered');
    }
  });

  logger.info('AppView View is defined');

  return AppView;
});
