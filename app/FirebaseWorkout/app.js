(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout', [
    'ui.router',
    'firebase',
    'ngStorage',

    'grobim.firebaseWorkout.login',
    'grobim.firebaseWorkout.followingTheGuide',
    'grobim.firebaseWorkout.withAngularFire'
  ])
      .run(['$rootScope', '$state', 'SessionService', 'Auth', 'User', appRun])
      ;

  function appRun($rootScope, $state, SessionService, Auth, User) {
    $rootScope.$on('$stateChangeStart', function(event, next) {

      var authData = Auth.$getAuth();

      if ((next.name !== 'login') && authData == null) {
        if (next.name !== 'createUser') {
          event.preventDefault();
          $state.go('login');
        }
      } else if ((next.name === 'login' || next.name === 'createUser') && authData != null) {
        event.preventDefault();
        $state.go('home');
      }

    });

    Auth.$onAuth(function(authData) {
      if (!authData) {
        SessionService.close();
        $state.go('login');
      } else {
        SessionService.authUser(new User(Auth.$getAuth().uid));
      }
    });
  }

})();
