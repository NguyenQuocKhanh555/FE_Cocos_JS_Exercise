cc.Class({
    extends: cc.Component,

    properties: {
        optionPrefab: cc.Prefab,
        optionsContainer: cc.Node,
        character: cc.Node,
        isCreate: false
        //animationNames: [cc.String]
    },

    start: function () {
        let skeleton = this.character.getComponent(sp.Skeleton); 

        console.log(skeleton);
        console.log(skeleton.skeletonData);

        if (skeleton) {
            let animations = skeleton._skeleton.data.animations;
            let animationNames = animations.map(a => a.name);

            this.optionsContainer.removeAllChildren();
            for (let animationName of animationNames) {
                let optionNode = cc.instantiate(this.optionPrefab);
                let optionLayout = optionNode.getComponent('OptionLayout');
                optionLayout.create(animationName, skeleton);
                this.optionsContainer.addChild(optionNode);
            }
        }
    }
});
