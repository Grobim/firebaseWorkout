(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireObject').factory('Profile', ['$firebaseObject', profileFactory]);

  function profileFactory($firebaseObject) {
    return function(username) {
      // create a reference to the Firebase where we will store our data
      var ref = new Firebase('https://boiling-fire-3060.firebaseio.com/profiles');
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    };
  }
})();