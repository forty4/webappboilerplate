define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/signin/page.html'
], function ($, _, Backbone, Handlebars, signinPageTemplate){
  'use strict';

  var SigninPage = Backbone.View.extend({
    el: '.page',

    template: Handlebars.compile(signinPageTemplate),

    events: {
      'submit form': 'signinCheck',
      'click #remember': 'rememberSignin'
    },

    render: function (options) {
      var signStatus = localStorage.getItem('signStatus');

      if (signStatus === 'signedin') {    // Sign In 상태에서 Sign Out을 선택하면 localStorage의 값을 변경하고 home으로 reload
        localStorage.setItem('signStatus', 'signedout');
        localStorage.setItem('rememberSignin', 'no');
        window.location = '/';
      } else {    // Sign In 상태가 아니면 Sign In Page로 이동
        $(this.el).html(this.template(options || {}));
      }
    },

    signinCheck: function (e) {
      var id = document.signin.id.value,
        password = document.signin.password.value,
        that = this;

      e.preventDefault();

      if (id === 'web' && password === 'app') {
        localStorage.setItem('signStatus', 'signedin');
        router.navigate('/', {trigger: true, replace: true});
        $('.main-menu-container').trigger('updateHeaderMenu');
      } else {
        that.render({
          message: 'ID or Password is not correct'
        });
      }

//      $.ajax({
//        type: 'POST',
//        url: '/api/signin',
//        data: {id: id, password: password}
//      }).done(function (msg) {
//        if (msg === 'success') {
//          localStorage.setItem('signStatus', 'signedin');
//          router.navigate('/', {trigger: true, replace: true});
//          $('.main-menu-container').trigger('updateHeaderMenu');
//        } else {
//          that.render({
//            message: 'ID or Password is not correct'
//          });
//        }
//      });

      //TODO: 임시로 id/pw를 정하고 비교하였으나, 추후 관리자 계정 관리, Cookie/세션 처리, sign in/out 처리 등을 전체적으로 개발해야 함
      //TODO: Sign in/out 여부를 localStorage에 저장하여 처리하였으나, secure한 처리를 위해 다시 개발해야 함
    },

    rememberSignin:function () {
      if ($('#remember')[0].checked) {
        localStorage.setItem('rememberSignin', 'yes');
      } else {
        localStorage.setItem('rememberSignin', 'no');
      }
    }
  });

  return SigninPage;
});
