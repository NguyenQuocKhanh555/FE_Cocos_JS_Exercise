
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        mana: 100,
        maxMana: 100,
        manaConsumRate: 1,
        idleTime: 0,
        deathTime: 0,
        regenManaDelay: 2,
        regenManaRate: 5,
        isMoving : false,
        moveDirection: cc.Vec2.ZERO,
        manaBar: cc.ProgressBar,
        characterName: "",
        nameLabel: cc.Label,
        characterVisual: cc.Node
    },

    onLoad: function() {
        this.manaBar.progress = this.mana / this.maxMana;
        this.nameLabel.string = this.characterName;
    },

    update: function(deltaTime) {
        this.move(deltaTime);
    },

    move: function(deltaTime) {
        if (this.mana <= 0) {
            if (this.deathTime >= 3) {
                this.node.active = false;
            } else {
                this.deathTime += deltaTime;
            }
            return;
        }

        if (!this.isMoving) {
            if (this.mana < this.maxMana) {
                if (this.idleTime >= this.regenManaDelay) {
                    this.mana = Math.min(this.maxMana, this.mana + this.regenManaRate * deltaTime);
                    this.manaBar.progress = this.mana / this.maxMana;
                } else {
                    this.idleTime += deltaTime;
                }
            }
            return;
        }

        this.characterVisual.scaleX = this.moveDirection.x === 0 ? 
            this.characterVisual.scaleX : this.moveDirection.x * Math.abs(this.characterVisual.scaleX);

        let movement = this.moveDirection.mul(this.speed * deltaTime)
        this.node.position = this.node.position.add(movement);
        this.mana -= this.manaConsumRate * deltaTime;
        this.idleTime = 0;
        if (this.mana <= 0) {
            this.isMoving = false;
            this.moveDirection = cc.Vec2.ZERO;
            this.characterVisual.getComponent(sp.Skeleton).setAnimation(0, "death", true);
        }
        this.manaBar.progress = this.mana / this.maxMana;
    },

    onStartMove: function(moveDirection) {
        if (this.deathTime > 0) return;
        this.isMoving = true;
        this.characterVisual.getComponent(sp.Skeleton).setAnimation(0, "walk", true);
        this.moveDirection = moveDirection;
    },

    onStopMove: function() {
        if (this.deathTime > 0) return;
        this.isMoving = false;
        this.characterVisual.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.moveDirection = cc.Vec2.ZERO;  
    }
});
