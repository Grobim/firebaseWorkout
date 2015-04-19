(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers')
      .controller('ChangePasswordController', ['$timeout', '$window', '$state', 'Auth', ChangePasswordController]);

  function ChangePasswordController($timeout, $window, $state, Auth) {
    var _this = this,
        authData = Auth.$getAuth();

    _this.changePassword = changePassword;

    (function init() {
      if (!_this.credentials) {
        _this.credentials = {};
      }
      _this.credentials.email = authData.password.email;
    })();

    function changePassword() {
      _this.dataLoading= true;
      Auth.$changePassword(_this.credentials).then(function() {
        $state.go('withAngularFire.manageUsers');
      }).catch(function(error) {
      _this.dataLoading= false;
        console.error('Error', error);
      });
    }
  }
})();
