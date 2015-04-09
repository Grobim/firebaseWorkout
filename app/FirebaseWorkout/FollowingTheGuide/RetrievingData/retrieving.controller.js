(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide').controller('RetrievingDataCtrl', ['$window', '$timeout', RetrievingDataCtrl]);

  function RetrievingDataCtrl($window, $timeout) {
    var ref = new $window.Firebase('https://boiling-fire-3060.firebaseio.com/web/saving-data/fireblog');
    var usersRef = ref.child('users');
    // var postsRef = ref.child('posts');

    var _this = this;

    _this.users = [];

    usersRef.on('child_added', function(snapshot) {
      $timeout(function() {
        var newUser = snapshot.val();
        newUser.nickname = snapshot.key();
        _this.users.push(newUser);
      });
    });

  }
})();