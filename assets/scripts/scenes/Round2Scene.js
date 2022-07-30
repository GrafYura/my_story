class Round2Scene extends Scene{
	constructor(){
		super("Round2");
	}
	create(data){
		this.buttonToPoint=0;
		this.staffSelected=0;
		this.createBg();
		this.lexi=Girl.generate({...data.lexi, scene:this});
		this.addButtons();
		this.addTopText('Choose your accessory');
		this.pointerStartTimer = this.delayedCall(this.startMovingPointer, 2000);
		this.setEvents()
	}
	setEvents(){
		this.events.once("lexiChanged", ()=>{
			this.delayedCall(()=>{
				this.lexi.conf.emotion=5;
				this.lexi.setEmotion();
			},this.animDuration);
			this.delayedCall(()=>{
				this.scene.start("Round3", {lexi:this.lexi.conf})
			},this.animDuration*2)
			
		}, this)
	}
	addButtons(){
		this.lb = SelectButton.generate({
			scene:this,
			texture:'SB_accessory1',
			left:true,
			params:'accessory',
			values:'accessory1'
		})
		this.rb = SelectButton.generate({
			scene:this,
			texture:`SB_accessory${this.lexi.conf.clothes=='clothes1'?2:3}`,
			left:false,
			params:'accessory',
			values:`accessory${this.lexi.conf.clothes=='clothes1'?2:3}`
		})
	}
}