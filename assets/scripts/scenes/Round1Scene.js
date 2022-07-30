class Round1Scene extends Scene{
	constructor(){
		super("Round1");
	}
	create(data){
		this.buttonToPoint=0;
		this.staffSelected=0;
		this.createBg();
		this.lexi=Girl.generate({...data.lexi, scene:this});
		this.addButtons();
		this.addTopText('Choose your bag');
		this.pointerStartTimer = this.delayedCall(this.startMovingPointer, 2000);
		this.setEvents()
	}
	setEvents(){
		this.events.once("lexiChanged", ()=>{
			this.delayedCall(()=>{
				this.lexi.conf.emotion=6;
				this.lexi.setEmotion();
			},this.animDuration);
			this.delayedCall(()=>{
				this.scene.start("Round2", {lexi:this.lexi.conf})
			},this.animDuration*2)
			
		}, this)
	}
	addButtons(){
		this.lb = SelectButton.generate({
			scene:this,
			texture:'SB_bag1',
			left:true,
			params:'bag',
			values:'bag1'
		})
		this.rb = SelectButton.generate({
			scene:this,
			texture:'SB_bag2',
			left:false,
			params:'bag',
			values:'bag2'
		})
	}
}