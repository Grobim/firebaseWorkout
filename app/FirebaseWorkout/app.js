(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout', [
    'ui.router',
    'firebase',

    'grobim.firebaseWorkout.followingTheGuide',
    'grobim.firebaseWorkout.withAngularFire'
  ]);

})();
