(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireArray').controller('FireArrayController', ['$firebaseArray', FireArrayController]);

  function FireArrayController($firebaseArray) {
    var _this = this,
    messagesRef = new Firebase('https://boiling-fire-3060.firebaseio.com/web/saving-data/fireblog/posts');

    _this.hello = 'Hello';
    _this.messages = $firebaseArray(messagesRef);

    _this.messages.$loaded(function() {
      _this.hello = 'Hihi';
    });

    console.log(_this.messages);
  }
})();