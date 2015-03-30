(function () {
  'use strict';

  angular.module('slv.app').controller('IndexCtrl', ['$translatePartialLoader', IndexCtrl]);

  function IndexCtrl($translatePartialLoader) {
    $translatePartialLoader.addPart('app');

    var _this = this;
    _this.angular = 'Hello tout le monde';
  }

})();
