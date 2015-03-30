(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide.savingData').config(['$stateProvider', savingRoutes]);

  function savingRoutes($stateProvider) {

    $stateProvider
      .state('following.saving', {
        url: '/saving',
        templateUrl: 'app/FirebaseWorkout/FollowingTheGuide/SavingData/saving.tpl.html',
        controller: 'SavingDataCtrl',
        controllerAs: 'saveCtrl'
      });

  }

})();
