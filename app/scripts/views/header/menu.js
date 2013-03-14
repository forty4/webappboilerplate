define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/header/menu.html',
  'common'
], function ($, _, Backbone, Handlebars, headerMenuTemplate, Common){
  'use strict';

  var logger = Common.getLogger('HeaderMenuView');

  var HeaderMenuView = Backbone.View.extend({
    el: '.main-menu-container',

    events: {
      'click a': 'highlightMenuItem',
      'updateHeaderMenu': 'updateHeaderMenu'
    },

    template: Handlebars.compile(headerMenuTemplate),

    initialize: function () {
    },

    render: function (options) {
      var signStatus = localStorage.getItem('signStatus');

      $(this.el).html(this.template({
        signed: ((signStatus && signStatus === 'signedin') ? true : false)
      }));
      $('a[href="?' + window.location.hash + '"]').parent().addClass('active');
      logger.info('HeaderMenuView instance is rendered, ' + window.location.hash);
    },

    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).parent().addClass('active');
    },

    updateHeaderMenu: function () {
      this.render();
    }
  });

  logger.info('HeaderMenuView View is defined');

  return HeaderMenuView;
});
