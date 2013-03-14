define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/page.html',
  'common'
], function ($, _, Backbone, homePageTemplate, Common) {
  'use strict';

  var logger = Common.getLogger('HomePage');

  var HomePage = Backbone.View.extend({
    el: '.page',

    render: function () {
      $(this.el).html(homePageTemplate);
      logger.info('HomePage instance is rendered');
    }
  });

  logger.info('HomePage View is created');

  return HomePage;
});
