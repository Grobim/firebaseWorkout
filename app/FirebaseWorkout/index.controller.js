(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout').controller('IndexCtrl', ['$state', 'Auth', 'User', IndexCtrl]);

  function IndexCtrl($state, Auth, User) {
    var _this = this;
    
    _this.userData = new User(Auth.$getAuth().uid);

    _this.unauth = unauth;

    function unauth() {
      _this.userData.$destroy();
      Auth.$unauth();
    }
  }

})();
