(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire').config(['$stateProvider', appRoutes]);

  function appRoutes($stateProvider) {

    $stateProvider
      .state('withAngularFire', {
        url: '/angularFire',
        templateUrl: 'app/FirebaseWorkout/WithAngularFire/main.tpl.html'
      });

  }

})();
