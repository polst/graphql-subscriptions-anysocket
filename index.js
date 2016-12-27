"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnySocketPubSub = exports.AnySocketPubSub = function () {
  function AnySocketPubSub(socket) {
    _classCallCheck(this, AnySocketPubSub);

    this.socket = socket;
    this.subscriptions = {};
    this.subIdCounter = 0;
  }

  _createClass(AnySocketPubSub, [{
    key: "subscribe",
    value: function subscribe(triggerName, onMessage) {
      this.socket.on(triggerName, onMessage);
      this.subIdCounter = this.subIdCounter + 1;
      this.subscriptions[this.subIdCounter] = [triggerName, onMessage];
      return Promise.resolve(this.subIdCounter);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subId) {
      var _subscriptions$subId = _slicedToArray(this.subscriptions[subId], 2),
          triggerName = _subscriptions$subId[0],
          onMessage = _subscriptions$subId[1];

      delete this.subscriptions[subId];
      this.socket.off(triggerName, onMessage);
    }
  }]);

  return AnySocketPubSub;
}();

