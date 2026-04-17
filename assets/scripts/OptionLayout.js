const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        nameLable: cc.Label,
        animationName: "",
        skeleton: sp.Skeleton
    },

    create: function (animationName, skeleton) {
        this.animationName = animationName;
        this.skeleton = skeleton;
        this.nameLable.string = animationName;
    },

    onClickRunButton: function () {
        Emitter.getInstance().emit("PLAY_SPINE_ANIMATION", this.animationName);
    }
});
