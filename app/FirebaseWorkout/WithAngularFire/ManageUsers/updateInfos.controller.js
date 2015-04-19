(function() {
  'use script';

  angular.module('grobim.firebaseWorkout.withAngularFire.manageUsers')
      .controller('UpdateInfosController', ['$state', 'SessionService', UpdateInfosController]);

  function UpdateInfosController($state, SessionService) {
    var _this = this;

    _this.user = SessionService.authUser();

    _this.updateInfos = updateInfos;

    function updateInfos() {
      _this.user.$save().then(function() {
        $state.go('withAngularFire.manageUsers');
      }, function(error) {
        console.log('Error', error);
      });
    }
  }

})();
