class TextField extends Phaser.GameObjects.Sprite {
	constructor(data){
		super(data.scene, data.x, data.y, data.texture)
		this.conf=data;
		this.init()
	}

	static generate(data){
		return new TextField(data);
	}

	prepare(){
		this.setScale(this.defScale);
	}
	
	addText(){
		this.text = this.conf.scene.add.text(this.x, this.y, "Choose your dress", {
			font: '36px NunitoSans',
			fill: '#ffffff',
		}).setOrigin(0.5);
	}
	changeText(text){
		this.conf.scene.tweens.add({
			targets: this.text,
			scale: 0,
			ease: 'Linear',
			duration:200,
			onComplete: ()=>{
				this.text.setText(text);
				this.conf.scene.tweens.add({
					targets: this.text,
					scale: 1,
					ease: 'Linear',
					duration:200
				})
			}
		});
	}
	init(){
		this.conf.scene.add.existing(this);
		this.defScale=0.25;
		this.prepare();
		this.addText();
		this.update();
		this.conf.scene.scale.on('resize', this.onResize, this)
	}

	update(){
		let prop = getProp();
		this.offsetY = (prop.propDif<0)?(this.scene.sys.game.config.height*(1-prop.proph)/2)-40:0;
		this.y=this.conf.y + this.offsetY;
		this.text.y=this.conf.y + this.offsetY;
		console.log(this.height)
	}

	onResize(){
		this.update();
	}
}