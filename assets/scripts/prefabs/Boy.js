class Boy extends Phaser.GameObjects.Sprite {
	constructor(data) {
		super(data.scene, data.x, data.y, data.texture, data.frame);
		this.data = data
		this.init();
	}

	prepare(target){
		target.setScale(this.defScale);
		target.setOrigin(0.5)
		this.data.y=this.data.scene.sys.game.config.height-(this.height*this.defScale/2)
		target.y=this.data.y;

	}
	updateOne(target){
		let prop = getProp();
		let offsetY = (prop.propDif<0)?(this.data.scene.sys.game.config.height*(1-prop.proph)/2)-40:0;
		target.y = this.data.y + offsetY;
	}
	update(){
		this.updateOne(this);		
		this.updateOne(this.emotion);		
		this.updateOne(this.hair);
	}

	initBody(){
		this.prepare(this);
		this.data.scene.scale.on('resize', this.onResize, this)
	}

	onResize(){
		this.update()
	}

	initEmotion(){
		this.emotion = this.data.scene.add.sprite(this.x, this.y, `${this.data.char}Emotions`, 'emotion6');
		this.prepare(this.emotion);
	}
	initAdditional(){
	}
	initHair(){
		this.hair = this.data.scene.add.sprite(this.x, this.y, `${this.data.char}Hair`);
		this.prepare(this.hair);
	}
	initAnim(){
		const frames = [{key: `${this.data.char}Emotions`, frame: 'emotion2'},{key: `${this.data.char}Emotions`, frame: 'emotion0'}]

		this.data.scene.anims.create({
			key: `${this.data.char}Speak`,
			frames,
			frameRate:3,
			repeat:5,
		});
	}

	setEmotion(n){
		this.emotion.setFrame(`emotion${n}`)
	}
	littleBitZoom(){
		this.data.scene.tweens.add({
			targets: [this, this.hair, this.emotion, this.clothes, this.clothesTop, this.accessories, this.bags],
			scale: this.defScale+0.05,
			ease: 'Linear',
			duration:200
		});
	}
	init(){
		this.defScale = this.data.scene.sys.game.config.height/this.height;
		this.data.scene.add.existing(this);
		this.initBody();
		this.initEmotion();
		this.initAdditional();
		this.initHair();
		this.initAnim();
		this.update();
	}
	speak(){
		this.emotion.play(`${this.data.char}Speak`);
	}
	static generate(data){
		return new Boy(data);
	}
}