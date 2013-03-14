define([
  'underscore',
  'backbone',
  'bbStorage',
  'models/user',
  'common'
  ], function (_, Backbone, Store, User, Common) {
    'use strict';

    var logger = Common.getLogger('UsersCollection'),
      UsersCollection;

    UsersCollection = Backbone.Collection.extend({
      // Reference to this collection's model.
      model: User,

      url: '/api/users'

      // Save all of the users items under the `"users"` namespace.
      //localStorage: new Store('backbone-user-collection'),
    });

    return new UsersCollection();
  });
