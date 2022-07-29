class StartScene extends Phaser.Scene { 
	constructor(){
		super("Start");
	}
	createBg(){
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', 'bg0').setOrigin(0.5);
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
			x:this.sys.game.config.width/2, 
			y:this.sys.game.config.height,
			texture: 'lexiBody',
			char:'lexi'
		})
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
			console.log('pressed');
			this.char.littleBitZoom();
		})
	}
	create(data) {
		console.log('StartScene.create');
		this.createBg();
		this.addPaul();
		this.addButons();
		this.setEvents();
		this.char = this.lexi||this.paul
	}
	update(){
		// this.rb.prepare();
		// this.lb.prepare();
		// this.lexi.prepareAll();
	}
}