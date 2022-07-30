class Scene extends Phaser.Scene{
	constructor(param){
		super(param)
	}
	init(){
		this.animDuration=300
	}


	createBg(){
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', 'bg0').setOrigin(0.5);
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
	addTopText(){
		this.topText=TextField.generate({
			scene:this,
			x:this.sys.game.config.width/2,
			y:50,
			texture:'topTextBg',
		});
	}
}