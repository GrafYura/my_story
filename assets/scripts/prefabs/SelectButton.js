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
		this.setInteractive();
		this.on('pointerdown', this.setVal, this)
	}
	setVal(){
		if(this.conf.scene.staffSelected)
			return;
		this.conf.scene.staffSelected=1;
		this.conf.scene.tweens.add({
			targets: this,
			scale:this.defScale*0.8,
			ease: 'Linear',
			duration:this.conf.scene.animDuration/2,
			onComplete:()=>{
				this.conf.scene.tweens.add({
					targets: this,
					scale:this.defScale,
					ease: 'Linear',
					duration:this.conf.scene.animDuration/2,
				})
			}
		})
		if(this.conf.scene.pointerStartTimer){
			this.conf.scene.pointerStartTimer.remove();
		}
		if(this.conf.scene.pointerTimer){
			this.conf.scene.pointerTimer.remove();
			this.conf.scene.pointer.destroy();
		}
		let params = this.conf.params;
		let values = this.conf.values;
		if(Array.isArray(params)){
			params.forEach((p,i)=>{
				this.conf.scene.lexi.conf[p]=values[i];
			})
		}
		else{
			this.conf.scene.lexi.conf[params]=values;
		}
		this.conf.scene.lexi.updateFrames();
		this.conf.scene.events.emit('lexiChanged');

	}
	onResize(){
		this.update();
	}
	update(){
		getProp()
		let sKoef = prop.propDif<0.15?1.2:0.6
		this.offsetScale =(prop.propDif>0.6)?1-(prop.propDif-0.6)/2:1;
		this.offsetX = this.width*this.defScale*sKoef*this.offsetScale*(this.conf.left?-1:1)
		this.offsetY = (prop.propDif<-0.15)?(-this.height*(-prop.propDif-0.15)/2):0;
		this.y=this.defY + this.offsetY;
		this.x=this.defX + this.offsetX;
		this.setScale(this.defScale * this.offsetScale);
	}
	static generate(data){
		return new SelectButton(data)
	}
}