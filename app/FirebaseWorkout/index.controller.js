(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout')
      .controller('IndexCtrl', ['SessionService', 'Auth', IndexCtrl]);

  function IndexCtrl(SessionService, Auth) {
    var _this = this;
    
    _this.authUser = SessionService.authUser();

    _this.unauth = unauth;

    function unauth() {
      Auth.$unauth();
    }
  }

})();
