(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login').factory('User', ['$firebaseObject', userFactory]);

  function userFactory($firebaseObject) {

    return User;

    function User(uid) {
      var ref = new Firebase('https://boiling-fire-3060.firebaseio.com/users');

      var userRef = ref.child(uid);

      return $firebaseObject(userRef);
    }
  }
})();
