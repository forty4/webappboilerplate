define([
  'underscore',
  'backbone',
  'common',
], function (_, Backbone, Common) {
    'use strict';
    var logger = Common.getLogger('UserModel'),
      UserModel;

    UserModel = Backbone.Model.extend({
      urlRoot: '/api/users',

      defaults: {
        //id: 'anonymous',
        name: 'anonymous'
      }
    });

    return UserModel;
  });
