(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login').config(['$stateProvider', loginRoutes]);

  function loginRoutes($stateProvider) {

    $stateProvider
        .state('login', {
          url          : '/login',
          controller   : 'LoginController',
          controllerAs : 'loginCtrl',
          templateUrl  : 'app/FirebaseWorkout/Login/login.tpl.html'
        })

        .state('createUser', {
          url : '/createUser',
          controller : 'CreateUserController',
          controllerAs : 'createUserCtrl',
          templateUrl  : 'app/FirebaseWorkout/Login/createUser.tpl.html'
        })
    ;

  }
})();
