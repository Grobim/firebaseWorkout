(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers').config(['$stateProvider', fireObjectRoutes]);

  function fireObjectRoutes($stateProvider) {

    $stateProvider
      .state('withAngularFire.manageUsers', {
        url: '/manageUsers',
        templateUrl: 'app/FirebaseWorkout/WithAngularFire/ManageUsers/manageUsers.tpl.html',
        controller: 'ManageUsersController',
        controllerAs: 'mngUsersCtrl'
      })
      .state('withAngularFire.changePassword', {
        url: '/changePassword',
        templateUrl: 'app/FirebaseWorkout/WithAngularFire/ManageUsers/changePassword.tpl.html',
        controller: 'ChangePasswordController',
        controllerAs: 'changePwdCtrl'
      })
      ;

  }

})();
