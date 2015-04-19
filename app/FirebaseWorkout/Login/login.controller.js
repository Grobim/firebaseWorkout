(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login').controller('LoginController', ['$state', 'Auth', LoginController]);

  function LoginController($state, Auth) {
    var _this = this;

    _this.login = login;

    function login() {
      _this.dataLoading = true;
      Auth.$authWithPassword({
        email    : _this.username,
        password : _this.password
      }).then(function() {
        $state.go('home');
      }).catch(function(error) {
        _this.dataLoading = false;
        _this.password = '';
        console.error('Authentication failed:', error);
      });
    }
  }

})();
