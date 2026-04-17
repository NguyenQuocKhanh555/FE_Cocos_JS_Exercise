const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        skeleton: sp.Skeleton,
        animation: cc.Animation,
        initPosition: 0,
        initScale: 0,
        initAngle: 0
    },

    onLoad: function () {
        this.skeleton = this.getComponent(sp.Skeleton);
        this.animation = this.getComponent(cc.Animation);

        this.initPosition = this.node.position.clone();
        this.initScale = this.node.scale;
        this.initAngle = this.node.angle;

        console.log(this.initPosition);
        console.log(this.initScale);
        console.log(this.initAngle);

        Emitter.getInstance().registerEvent("PLAY_SPINE_ANIMATION", this.onPlaySpineAnimation.bind(this));
        Emitter.getInstance().registerEvent("PLAY_ANIMATION_CLIP", this.onPlayAnimationClip.bind(this));
        Emitter.getInstance().registerEvent("PLAY_RUN_ACTION", this.onPlayRunAction.bind(this));
        Emitter.getInstance().registerEvent("PLAY_TWEEN", this.onPlayTween.bind(this));
    },

    resetState: function () {
        this.node.setPosition(this.initPosition);
        this.node.setScale(this.initScale);
        this.node.angle = this.initAngle;
        this.animation.stop();
        cc.Tween.stopAllByTarget(this.node);
        this.node.stopAllActions();
        this.skeleton.setAnimation(0, "idle", true);
    },

    onPlaySpineAnimation: function(animationName) {
        this.resetState();
        this.skeleton.setAnimation(0, animationName, true);
    },

    onPlayAnimationClip: function () {
        this.resetState();
        this.animation.play("move");
    },

    onPlayRunAction: function () {
        this.resetState();
        let move = cc.moveBy(0.3, cc.v2(50, 0));
        let back = cc.moveBy(0.3, cc.v2(-50, 0));
        let seq = cc.sequence(move, back);
        this.node.runAction(seq);
    },

    onPlayTween: function () {
        this.resetState();
        cc.tween(this.node)
            .to(1, { position: cc.v2(100, 100), rotation: 360 })
            .to(1, { scale: 2 })
            .start()
    },

    onDestroy() {
        Emitter.getInstance().removeEvent("PLAY_SPINE_ANIMATION",this.onPlaySpineAnimation);
        Emitter.getInstance().removeEvent("PLAY_ANIMATION_CLIP",this.onPlayAnimationClip);
        Emitter.getInstance().removeEvent("PLAY_RUN_ACTION", this.onPlayRunAction);
        Emitter.getInstance().removeEvent("PLAY_TWEEN", this.onPlayTween);
    }
});
