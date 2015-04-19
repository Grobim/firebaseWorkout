(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers')
      .controller('ChangePasswordController', ['$timeout', '$window', '$state', 'Auth', ChangePasswordController]);

  function ChangePasswordController($timeout, $window, $state, Auth) {
    var _this = this;

    _this.changePassword = changePassword;

    var ref = new $window.Firebase('https://boiling-fire-3060.firebaseio.com/users/' + Auth.$getAuth().uid);
    ref.once('value', function(data) {
      $timeout(function() {
        if (!_this.credentials) {
          _this.credentials = {};
        }
        _this.credentials.email = data.val().email;
      });
    });

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
