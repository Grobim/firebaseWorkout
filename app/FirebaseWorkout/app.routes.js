(function () {
  'use strict';

  angular.module('slv.app').config(['$stateProvider', '$urlRouterProvider', appRoutes]);

  function appRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/slv/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'indexCtrl'
      });

    $urlRouterProvider.otherwise('/');

  }

})();
