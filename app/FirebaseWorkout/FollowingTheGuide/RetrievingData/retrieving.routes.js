(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide.retrievingData').config(['$stateProvider', retrievingRoutes]);

  function retrievingRoutes($stateProvider) {

    $stateProvider
      .state('following.saving.retrieving', {
        url: '^/following/retrieving',
        templateUrl: 'app/FirebaseWorkout/FollowingTheGuide/retrievingData/retrieving.tpl.html',
        controller: 'RetrievingDataCtrl',
        controllerAs: 'retrieveCtrl'
      });

  }

})();
