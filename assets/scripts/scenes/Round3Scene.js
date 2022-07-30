class Round3Scene extends Scene{
	constructor(){
		super("Round3");
	}
	create(data){
		this.buttonToPoint=0;
		this.staffSelected=0;
		this.createBg();
		this.lexi=Girl.generate({...data.lexi, scene:this});
		this.addButtons();
		this.addTopText('Choose your place');
		this.pointerStartTimer = this.delayedCall(this.startMovingPointer, 2000);
		this.setEvents()
	}
	setEvents(){
		this.events.once("lexiChanged", ()=>{
			this.delayedCall(()=>{
				this.scene.start(`${this.lexi.conf.clothes=='clothes1'?'Amazing':'Loose'}Screen`, {lexi:this.lexi.conf})
			},this.animDuration*2)
			
		}, this)
	}
	addButtons(){
		this.lb = SelectButton.generate({
			scene:this,
			texture:'SB_place1',
			left:true,
			params:'place',
			values:'bg1'
		})
		this.rb = SelectButton.generate({
			scene:this,
			texture:'SB_place2',
			left:false,
			params:'place',
			values:'bg2'
		})
	}
}