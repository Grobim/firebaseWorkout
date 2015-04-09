(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireObject').controller('FireObjectController', ['$scope', 'Profile', FireObjectController]);

  function FireObjectController($scope, Profile) {

    new Profile('physicsmarie').$bindTo($scope, 'profile');

  }
  
})();