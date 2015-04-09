(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireArray').config(['$stateProvider', fireArrayRoutes]);

  function fireArrayRoutes($stateProvider) {

    $stateProvider
      .state('withAngularFire.fireArray', {
        url: '/syncArray',
        templateUrl: 'app/FirebaseWorkout/WithAngularFire/FireArray/firearray.tpl.html',
        controller: 'FireArrayController',
        controllerAs: 'fireArrayCtrl'
      });

  }
})();