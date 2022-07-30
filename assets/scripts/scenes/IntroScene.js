class IntroScene extends Phaser.Scene { 
	constructor(){
		super("Start");
	}
	init(){
		this.animDuration=300
	}
	createBg(){
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', 'bg0').setOrigin(0.5);
		const graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.5);
		graphics.fillRoundedRect(0, 0, this.sys.game.config.width, this.sys.game.config.height);
	}
	addPaul(){
		this.paul = Boy.generate({
			scene:this,
			x:this.sys.game.config.width/2, 
			y:this.sys.game.config.height,
			texture: 'paulBody',
			char:'paul'
		});
	}
	addLexi(){
		this.lexi = Girl.generate({
			scene:this,
			x:-this.sys.game.config.width, 
			y:this.sys.game.config.height,
			texture: 'lexiBody',
			char:'lexi'
		})
	}
	addText(){
		this.topText=TextField.generate({
			scene:this,
			x:this.sys.game.config.width/2,
			y:50,
			texture:'topTextBg',
		});
	}
	addButons(){
		this.lb = SelectButton.generate({
			scene:this,
			texture:'SB_clothes1',
			left:true

		})
		this.rb = SelectButton.generate({
			scene:this,
			texture:'SB_clothes2',
			left:false
		})
	}
	setEvents(){
		this.input.on("pointerdown", ()=>{
			// this.scene.start("Game");
			
		})
	}
	delayedCall(func, delay){
		this.time.addEvent({
			delay,
			callback:func,
			callbackScope:this,
		})
	}
	create() {
		console.log('StartScene.create');
		this.createBg();
		this.addPaul();
		this.addLexi();
		console.log(this.lexi)
		this.showSpeach('speach_Paul1');
		this.delayedCall(this.action1, 2000);
		this.setEvents();
		this.char = this.lexi||this.paul
	}
	action1(){
		this.paul.move(this.sys.game.config.width*2)
		this.lexi.move(this.sys.game.config.width/2)
		this.changeSpeach('speach_Lexi1')
		this.delayedCall(this.action2, 2000);
	}
	action2(){
		this.hideSpeach(()=>{this.scene.start('Tutorial', {lexi:this.lexi.conf})})
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
}