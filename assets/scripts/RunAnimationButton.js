const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        eventName: ""
    },

    onClick: function () {
        Emitter.getInstance().emit(this.eventName, this.animationName);
    }
 });
