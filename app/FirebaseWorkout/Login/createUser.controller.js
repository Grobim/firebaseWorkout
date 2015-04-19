(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.login').controller('CreateUserController', ['$state', 'Auth', 'User', CreateUserController]);

  function CreateUserController($state, Auth, User) {
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

          var userRef = new User(authData.uid);
          userRef.firstname = _this.newUser.firstname;
          userRef.lastname = _this.newUser.lastname;
          userRef.nickname = _this.newUser.nickname;
          userRef.email = _this.newUser.email;
          userRef.$save();

          userRef.$destroy();

          $state.go('home');

        });

      }).catch(function(error) {
        _this.dataLoading = false;
        console.error('Error: ', error);
      });
    }
  }

})();
