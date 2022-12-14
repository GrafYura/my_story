class TutorialScene extends Scene{
	constructor(){
		super("Tutorial");
	}
	create(data){
		this.buttonToPoint=0;
		this.staffSelected=0;
		this.createBg();
		this.addDarkLayout();
		this.lexi=Girl.generate({...data.lexi, scene:this});
		this.lexi.littleBitZoom();
		this.lexi.conf.emotion=3;
		this.lexi.setEmotion();
		this.delayedCall(()=>{
			this.addButtons();
			this.addTopText('Choose your dress');
		},this.animDuration),
		this.pointerStartTimer = this.delayedCall(this.startMovingPointer, 2000);
		this.setEvents()
	}
	setEvents(){
		this.events.once("lexiChanged", ()=>{
			this.delayedCall(()=>{
				this.lexi.conf.emotion=0;
				this.lexi.setEmotion();
			},this.animDuration);
			this.delayedCall(()=>{
				this.scene.start("Round1", {lexi:this.lexi.conf})
			},this.animDuration*2)
			
		}, this)
	}
	addButtons(){
		this.lb = SelectButton.generate({
			scene:this,
			texture:'SB_clothes1',
			left:true,
			params:['clothes','clothesTop'],
			values:['clothes1', 'clothesTop1']
		})
		this.rb = SelectButton.generate({
			scene:this,
			texture:'SB_clothes2',
			left:false,
			params:['clothes','clothesTop'],
			values:['clothes2', 'clothesTop2']
		})
	}
}