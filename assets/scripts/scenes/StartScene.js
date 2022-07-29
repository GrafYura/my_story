class StartScene extends Phaser.Scene { 
	constructor(){
		super("Start");
	}
	createBg(){
		console.log()
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', 'bg0').setOrigin(0.5);
	}
	addChar(){
		// this.paul = Boy.generate({
		// 	scene:this,
		// 	x:this.sys.game.config.width/2, 
		// 	y:this.sys.game.config.height/2,
		// 	texture: 'paulBody',
		// 	char:'paul'
		// });
		this.lexi = Girl.generate({
			scene:this,
			x:this.sys.game.config.width/2, 
			y:this.sys.game.config.height,
			texture: 'lexiBody',
			char:'lexi'
		})
		this.lexi.setEmotion(3);
		this.lexi.speak();
		this.lexi.setClothes(2);
		this.lexi.setAccessory(2);
		this.lexi.setBag(1);
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
		})
	}
	create(data) {
		console.log('StartScene.create');
		this.createBg();
		this.addChar();
		this.addButons();
		this.setEvents();
		console.log(this)
	}
	update(){
		// this.rb.prepare();
		// this.lb.prepare();
		// this.lexi.prepareAll();
	}
}