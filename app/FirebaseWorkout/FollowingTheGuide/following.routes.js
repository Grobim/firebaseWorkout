(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide').config(['$stateProvider', appRoutes]);

  function appRoutes($stateProvider) {

    $stateProvider
      .state('following', {
        url: '/following',
        templateUrl: 'app/FirebaseWorkout/FollowingTheGuide/main.tpl.html'
      });

  }

})();
