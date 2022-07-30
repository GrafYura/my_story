class Boy extends Phaser.GameObjects.Sprite {
	constructor(data) {
		super(data.scene, data.x, data.y, data.texture, data.frame);
		this.conf = data
		this.init();
	}

	prepare(target){
		target.setScale(this.conf.defScale+this.conf.offsetScale);
		target.setOrigin(0.5)
		this.conf.y=this.conf.scene.sys.game.config.height-(this.height*this.conf.defScale/2)
		target.y=this.conf.y;

	}
	updateOne(target){
		this.offsetScale2 =(prop.propDif<-0.05)?1-(-prop.propDif/1.5):1;
		let offsetY = (prop.propDif<-0.25)?(this.conf.scene.sys.game.config.height*(-prop.propDif-0.25)*this.offsetScale2/2):0;
		target.setScale((this.conf.defScale+this.conf.offsetScale)*this.offsetScale2);
		target.y = this.conf.y + offsetY;
	}
	update(){
		getProp()
		this.updateOne(this);		
		this.updateOne(this.emotion);		
		this.updateOne(this.hair);
	}

	initBody(){
		this.prepare(this);
		this.conf.scene.scale.on('resize', this.onResize, this)
	}

	onResize(){
		this.update()
	}

	initEmotion(){
		this.emotion = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Emotions`, `emotion${this.conf.emotion}`);
		this.prepare(this.emotion);
	}
	initAdditional(){
	}
	initHair(){
		this.hair = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Hair`);
		this.prepare(this.hair);
	}
	initAnim(){
		const frames = [{key: `${this.conf.char}Emotions`, frame: 'emotion2'},{key: `${this.conf.char}Emotions`, frame: 'emotion0'}]

		this.conf.scene.anims.create({
			key: `${this.conf.char}Speak`,
			frames,
			frameRate:3,
			repeat:5,
		});
	}

	setEmotion(){
		this.emotion.setFrame(`emotion${this.conf.emotion}`)
	}
	littleBitZoom(){
		this.conf.offsetScale = 0.05;
		this.conf.scene.tweens.add({
			targets: [this, this.hair, this.emotion, this.clothes, this.clothesTop, this.accessories, this.bags],
			scale: (this.conf.defScale+this.conf.offsetScale)*this.offsetScale2,
			ease: 'Linear',
			duration:this.conf.scene.animDuration
		});
	}
	move(x,dur=undefined){
		this.conf.x=x;
		this.conf.scene.tweens.add({
			targets: [this, this.hair, this.emotion, this.clothes, this.clothesTop, this.accessories, this.bags],
			x:x,
			ease: 'Linear',
			duration: dur||this.conf.scene.animDuration
		});
		this.update()
	}
	init(){
		if(!this.conf.defScale){
			this.conf.defScale = this.conf.scene.sys.game.config.height/this.height;
		}
		if(!this.conf.offsetScale){
			this.conf.offsetScale = 0;
		}
		this.conf.scene.add.existing(this);
		this.initBody();
		this.initEmotion();
		this.initAdditional();
		this.initHair();
		this.initAnim();
		this.update();
	}
	speak(endEmotion){
		this.emotion.play(`${this.conf.char}Speak`);
		this.emotion.once('animationcomplete', ()=>{ if(endEmotion){
			this.conf.emotion=endEmotion;
			this.setEmotion();
		}})
	}
	static generate(data){
		return new Boy(data);
	}
}