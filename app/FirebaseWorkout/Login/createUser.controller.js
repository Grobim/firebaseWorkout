(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login')
      .controller('CreateUserController', ['$state', '$window', '$timeout', 'Auth', CreateUserController]);

  function CreateUserController($state, $window, $timeout, Auth) {
    var _this = this;

    _this.create = create;

    function create() {
      _this.dataLoading = true;
      Auth.$createUser({

        email    : _this.newUser.email,
        password : _this.newUser.password

      }).then(function() {

        return Auth.$authWithPassword({
          email    : _this.newUser.email,
          password : _this.newUser.password
        }).then(function(authData) {

          var userRef = new $window.Firebase('https://boiling-fire-3060.firebaseio.com/users').child(authData.uid);
          userRef.set({
            firstname : _this.newUser.firstname,
            lastname  : _this.newUser.lastname,
            nickname  : _this.newUser.nickname
          }, function(error) {
            $timeout(function() {

              _this.dataLoading = false;
              if (error) {
                throw error;
              } else {
                $state.go('home');
              }

            });
          });
        });

      }).catch(function(error) {
        _this.dataLoading = false;
        console.error('Error: ', error);
      });
    }
  }

})();
