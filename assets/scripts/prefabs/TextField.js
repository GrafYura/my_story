class TextField extends Phaser.GameObjects.Sprite {
	constructor(data){
		super(data.scene, data.x, data.y, data.texture)
		this.data=data;
		this.init()
	}

	static generate(data){
		return new TextField(data);
	}

	prepare(){
		this.setScale(this.defScale);
	}
	
	addText(){
		this.text = this.data.scene.add.text(this.x, this.y, "Choose your dress", {
			font: '36px NunitoSans',
			fill: '#ffffff',
		}).setOrigin(0.5);
	}
	changeText(text){
		this.data.scene.tweens.add({
			targets: this.text,
			scale: 0,
			ease: 'Linear',
			duration:200,
			onComplete: ()=>{
				this.text.setText(text);
				this.data.scene.tweens.add({
					targets: this.text,
					scale: 1,
					ease: 'Linear',
					duration:200
				})
			}
		});
	}
	init(){
		this.data.scene.add.existing(this);
		this.defScale=0.25;
		this.prepare();
		this.update();
		this.addText();
		this.data.scene.scale.on('resize', this.onResize, this)
	}

	update(){
		let prop = getProp();
		this.offsetY = (prop.propDif<0)?(this.scene.sys.game.config.height*(1-prop.proph)/2)-40:0;
		this.y=this.data.y + this.offsetY;
		console.log(this.height)
	}

	onResize(){
		this.update();
	}
}