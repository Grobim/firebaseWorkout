(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout')
      .controller('IndexCtrl', ['$state', 'SessionService', 'Auth', IndexCtrl]);

  function IndexCtrl($state, SessionService, Auth) {
    var _this = this;
    
    _this.authUser = SessionService.authUser();

    _this.unauth = unauth;

    function unauth() {
      Auth.$unauth();
    }
  }

})();
