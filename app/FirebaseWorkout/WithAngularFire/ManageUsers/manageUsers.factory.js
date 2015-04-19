(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers').factory('Users', ['$firebaseArray', usersFactory]);

  function usersFactory($firebaseArray) {
    return function() {
      return $firebaseArray(new Firebase('https://boiling-fire-3060.firebaseio.com/users'));
    };
  }
})();