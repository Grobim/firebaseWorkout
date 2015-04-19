(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide.structuringData').controller('StructuringDataCtrl', ['$timeout', StructuringDataCtrl]);

  function StructuringDataCtrl($timeout) {
    var ref = new Firebase('https://boiling-fire-3060.firebaseio.com/web/structuring');
    var userRef = ref.child('users');
    var groupsRef = ref.child('groups');

    var _this = this;


    _this.createGroup = createGroup;
    _this.createUser = createUser;


    groupsRef.on('value', function(snapshot) {
      $timeout(function() {
        _this.groups = snapshot.val();
      });
    });

    function createGroup(event) {
      event.preventDefault();

      groupsRef.child(_this.newGroup.title).set({
        description : _this.newGroup.description
      }, function(error) {
        if (!error) {
          $timeout(function () {
            _this.newGroup = {};
          });
        }
      });
    }

    function createUser(event) {
      event.preventDefault();

      userRef.child(_this.newUser.nickname).set({
        fullname : _this.newUser.fullname,
        userGroups : _this.newUser.userGroups
      }, function (error) {
        if (!error) {
          $timeout(function() {
            _this.newUser = {};
          });
        }
      });
    }
  }

})();