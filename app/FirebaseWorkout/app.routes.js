(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout').config(['$stateProvider', '$urlRouterProvider', appRoutes]);

  function appRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/FirebaseWorkout/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'indexCtrl'
      });

    $urlRouterProvider.otherwise('/');

  }

})();
