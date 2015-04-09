(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireObject').config(['$stateProvider', fireObjectRoutes]);

  function fireObjectRoutes($stateProvider) {

    $stateProvider
      .state('withAngularFire.fireObject', {
        url: '/syncObject',
        templateUrl: 'app/FirebaseWorkout/WithAngularFire/FireObject/fireobject.tpl.html',
        controller: 'FireObjectController',
        controllerAs: 'fireObjectCtrl'
      });

  }

})();
