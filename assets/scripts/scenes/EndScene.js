class EndScene extends Scene{
	constructor(){
		super("End");
	}
	create(data){
		this.createBg(data.lexi.place);
		this.setEvents();
		this.paul = Boy.generate({...data.paul, scene:this})
		this.lexi = Girl.generate({...data.lexi, scene:this});
		this.showFinalButton(data.button);
		this.scale.on('resize', this.setFbSize, this)
	}
	setFbSize(){
		getProp()
			this.fb.y = this.fb.conf.defY - ((prop.propDif<-0.2)?(this.sys.game.config.height*(-prop.propDif-0.2)/2):0)
	}
	setEvents(){
		this.input.on("pointerdown", ()=>{
			window.open(url, '_blank')
		})
	}
	showFinalButton(texture){
		this.fb = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height*0.8,texture).setScale(0.25);
		this.fb.conf={defY:this.sys.game.config.height*0.8};
		this.setFbSize();
	}
}