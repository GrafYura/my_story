class LooseScreenScene extends Scene{
	constructor(){
		super("LooseScreen");
	}
	addPaul(){
		this.paul = Boy.generate({
			scene:this,
			x:this.sys.game.config.width+300, 
			y:this.sys.game.config.height,
			texture: 'paulBody',
			char:'paul',
			emotion:'0'
		});
	}
	create(data){
		this.createBg(data.lexi.place);
		this.addPaul();
		this.lexi=Girl.generate({...data.lexi, scene:this, x:-300, offsetScale:0});
		this.paul.move(this.sys.game.config.width/2+70);
		this.lexi.move(this.sys.game.config.width/2-70);
		this.paulSpeak();
		
	}
	paulSpeak(){
		this.delayedCall(()=>{this.paul.speak(1);
			this.showSpeach('speach_Paul3');
		},this.animDuration)
		this.delayedCall(()=>{this.hideSpeach();
		this.lexi.conf.emotion=4;
	this.lexi.setEmotion()},3000);
	this.delayedCall(()=>{this.scene.start("End", {lexi:this.lexi.conf, paul:this.paul.conf, button:'tryAgain'})},4500)
	}
}
