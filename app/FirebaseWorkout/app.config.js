(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout')
      .config([appConfig])
      .run(['$rootScope', '$state', 'Auth', appRun])
      .factory('Auth', ['$firebaseAuth', appAuthFactory])
      ;

  function appConfig() {

  }

  function appRun($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, next) {

      var authData = Auth.$getAuth();

      if ((next.name !== 'login') && authData == null) {
        if (next.name !== 'createUser') {
          event.preventDefault();
          $state.go('login');
        }
      }

    });

    Auth.$onAuth(function(authData) {
      if (!authData) {
        $state.go('login');
      }
    });
  }

  function appAuthFactory($firebaseAuth) {
    var ref = new Firebase('https://boiling-fire-3060.firebaseio.com');
    return $firebaseAuth(ref);
  }

})();
