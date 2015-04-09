(function () {
  'use strict';

  angular.module('grobim.firebaseWorkout.followingTheGuide').controller('SavingDataCtrl', ['$timeout', SavingDataCtrl]);

  function SavingDataCtrl($timeout) {
    var ref = new Firebase('https://boiling-fire-3060.firebaseio.com/web/saving-data/fireblog');
    var usersRef = ref.child('users');
    var postsRef = ref.child('posts');

    var _this = this;

    _this.saveUser = saveUser;
    _this.updateUser = updateUser;

    _this.addPost = addPost;

    function saveUser() {
      $timeout(function() {
        usersRef.child(_this.nickname).set({
          date: _this.date,
          fullname: _this.fullname
        }, function(error) {
          if (error) {
            console.error('Error : ' + error);
          } else {
            console.log('Coucou');
          }
        });
      });
    }

    function updateUser() {
      usersRef.child(_this.nickname2).update({
        fullname: _this.fullname2
      }, function(error) {
        if (error) {
          console.error('Error : ' + error);
        } else {
          console.log('Updated');
        }
      });
    }

    function addPost() {
      postsRef.push({
        author: _this.nickname3,
        title: _this.fullname3
      }, function(error) {
        if (error) {
          console.error('Error : ' + error);
        } else {
          console.log('Post added');
        }
      });
    }
  }

})();
