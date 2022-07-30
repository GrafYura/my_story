class IntroScene extends Scene { 
	constructor(){
		super("Start");
	}
	addPaul(){
		this.paul = Boy.generate({
			scene:this,
			x:this.sys.game.config.width/2, 
			y:this.sys.game.config.height,
			texture: 'paulBody',
			char:'paul',
			emotion:'0'
		});
	}
	addLexi(){
		this.lexi = Girl.generate({
			scene:this,
			x:-this.sys.game.config.width, 
			y:this.sys.game.config.height,
			texture: 'lexiBody',
			char:'lexi',
			clothes:'clothes0',
			accessory:'accessory0',
			bag:'bag0',
			clothesTop:'clothesTop0',
			emotion:'0'
		})
	}
	create() {
		this.createBg();
		this.addDarkLayout();
		this.addPaul();
		this.paul.speak();
		this.addLexi();
		this.showSpeach('speach_Paul1');
		this.delayedCall(this.action1, 2000);
	}
	action1(){
		this.paul.move(this.sys.game.config.width*2)
		this.lexi.move(this.sys.game.config.width/2)
		this.lexi.speak();
		this.changeSpeach('speach_Lexi1')
		this.delayedCall(this.action2, 2000);
	}
	action2(){
		this.hideSpeach(()=>{this.scene.start('Tutorial', {lexi:this.lexi.conf})})
	}
}