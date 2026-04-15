cc.Class({
    extends: cc.Component,

    properties: {
        characterController: {
            default: null,
            type: cc.Component
        },
        moveDirection: cc.Vec2.ZERO
    },

    onLoad: function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        console.log(this.node);
    },

    onTouchStart: function() {
        this.characterController?.onStartMove(this.moveDirection);
    },

    onTouchEnd: function() {
        this.characterController?.onStopMove();
    },

    onDestroy: function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
});
