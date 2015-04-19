(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers')
      .controller('ManageUsersController', ['$state', 'Users', 'Auth', FireObjectController]);

  function FireObjectController($state, Users, Auth) {

    var _this = this;

    _this.hello = 'Coucou';

    _this.users = new Users();

    _this.isAuthUser = isAuthUser;
    _this.changePassword = changePassword;

    function isAuthUser(user) {
      return Auth.$getAuth().uid === user.$id;
    }

    function changePassword() {
      $state.go('withAngularFire.changePassword');
    }

  }
  
})();