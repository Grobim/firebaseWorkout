(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers')
      .controller('ManageUsersController', ['$state', 'Users', 'SessionService', ManageUsersController]);

  function ManageUsersController($state, Users, SessionService) {

    var _this = this;

    _this.users = new Users();

    _this.isAuthUser = isAuthUser;

    _this.session = SessionService.session;

    function isAuthUser(user) {
      return SessionService.authUser().$id === user.$id;
    }

  }
  
})();
