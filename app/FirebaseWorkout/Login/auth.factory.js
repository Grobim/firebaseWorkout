(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login')
      .factory('Auth', ['$firebaseAuth', appAuthFactory])
      ;

  function appAuthFactory($firebaseAuth) {
    var ref = new Firebase('https://boiling-fire-3060.firebaseio.com');
    return $firebaseAuth(ref);
  }
})();
