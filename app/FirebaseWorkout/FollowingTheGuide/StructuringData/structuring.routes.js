(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide.structuringData').config(['$stateProvider', structuringRoutes]);

  function structuringRoutes($stateProvider) {

    $stateProvider.state('following.structuring', {
        url: '/structuring',
        templateUrl: 'app/FirebaseWorkout/FollowingTheGuide/StructuringData/structuring.tpl.html',
        controller: 'StructuringDataCtrl',
        controllerAs: 'structureCtrl'
      }
    );

  }

})();