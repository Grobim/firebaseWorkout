(function() {
  'use strict';

  angular.module('grobim.firebaseWorkout.withAngularFire.fireArray').controller('FireArrayController', ['$firebaseArray', FireArrayController]);

  function FireArrayController($firebaseArray) {
    var _this = this,
    messagesRef = new Firebase('https://boiling-fire-3060.firebaseio.com/web/saving-data/fireblog/posts');

    _this.messages = $firebaseArray(messagesRef);

    _this.messagesExists = messagesExists;
    _this.sendMessage = sendMessage;
    _this.deleteMessage = deleteMessage;
    _this.saveMessage = saveMessage;
    _this.deleteMessageFromId = deleteMessageFromId;


    _this.messages.$loaded(function() {
      _this.isLoaded = true;
    });

    function messagesExists() {
      return _this.messages.length > 0;
    }

    function sendMessage() {
      _this.messages.$add(_this.newMessage).then(function() {
        _this.newMessage.title = '';
      });
    }

    function deleteMessage(message) {
      _this.messages.$remove(message);
    }

    function saveMessage(message) {
      _this.messages.$save(message);
    }

    function deleteMessageFromId(id) {
      var ref = _this.messages.$getRecord(id);
      _this.messages.$remove(ref);
    }
  }
})();