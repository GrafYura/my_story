class Scene extends Phaser.Scene{
	constructor(param){
		super(param)
	}
	init(){
		this.animDuration=300
	}


	createBg(frame='bg0'){
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', frame).setOrigin(0.5);
	}
	addDarkLayout(){
		const graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.5);
		graphics.fillRoundedRect(0, 0, this.sys.game.config.width, this.sys.game.config.height);
	}
	delayedCall(func, delay){
		return this.time.addEvent({
			delay,
			callback:func,
			callbackScope:this,
		})
	}
	delayedCallR(func, delay){
		return this.time.addEvent({
			delay,
			callback:func,
			callbackScope:this,
			loop:true
		})
	}
	showSpeach(texture)
	{
		this.speach = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/5*3, texture).setScale(0);
		this.tweens.add({
			targets: [this.speach],
			scale:0.25,
			ease: 'Linear',
			duration: this.animDuration/2
		});
	}
	hideSpeach(callback){
		this.tweens.add({
			targets: [this.speach],
			scale:0,
			ease: 'Linear',
			duration: this.animDuration/2,
			onComplete:()=>{
				if(callback)
					callback();
			}
		});
	}
	changeSpeach(texture){
		this.tweens.add({
			targets: [this.speach],
			scale:0,
			ease: 'Linear',
			duration: this.animDuration/2,
			onComplete:()=>{
				this.speach.setTexture(texture);
				this.tweens.add({
					targets: [this.speach],
					scale:.25,
					ease: 'Linear',
					duration:this.animDuration/2
				})
			}
		});
	}
	addTopText(text){
		this.topText=TextField.generate({
			scene:this,
			x:this.sys.game.config.width/2,
			y:50,
			texture:'topTextBg',
			text,
		});
	}
	addPointer(){
		this.pointer = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height*2, 'pointer').setScale(0.25).setOrigin(0.2);
	}
	startMovingPointer(){
		this.addPointer();
		this.pointerTimer = this.delayedCallR(this.movePointer,1000);
	}
	movePointer(){
		this.tweens.add({
			targets: this.pointer,
			x: this.buttonToPoint?this.rb.x:this.lb.x,
			y: this.buttonToPoint?this.rb.y:this.lb.y,
			ease: 'Linear',
			duration:this.animDuration,
			onComplete:()=>{
				this.buttonToPoint = !this.buttonToPoint;
			}
		})
	}
}