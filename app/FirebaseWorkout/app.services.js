(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout').service('SessionService', ['$localStorage', sessionService]);

  function sessionService($localStorage) {
    return {
      session  : $localStorage,
      authUser : authUser,
      close    : close
    };

    function close() {
      $localStorage.authUser.$destroy();
      delete $localStorage.authUser;
    }

    function authUser(override) {
      if (override) {
        $localStorage.authUser = override;
      }
      return $localStorage.authUser;
    }
  }

})();
