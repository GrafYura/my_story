class SelectButton extends Phaser.GameObjects.Sprite{
	constructor(data){
		super(data.scene, 0, 0, data.texture);
		this.conf = data;
		this.init()
	}

	prepare(){
		this.defX=this.conf.scene.sys.game.config.width/2;
		this.defY=this.conf.scene.sys.game.config.height/4*3;
	}

	init(){
		this.conf.scene.add.existing(this);
		this.defScale=0.25;
		this.prepare();
		this.update();
		this.conf.scene.scale.on('resize', this.onResize, this)
	}
	onResize(){
		this.update();
	}
	update(){
		let prop = getProp();
		this.offsetScale =(prop.propDif>0.6)?1-(prop.propDif-0.6)/2:1;
		this.offsetX = this.width*this.defScale*0.6*this.offsetScale*(this.conf.left?-1:1)
		this.offsetY = (prop.propDif<0)?(-this.height*(1-prop.proph)/2)+40:0;
		this.y=this.defY + this.offsetY;
		this.x=this.defX + this.offsetX;
		this.setScale(this.defScale * this.offsetScale);
	}
	static generate(data){
		return new SelectButton(data)
	}
}