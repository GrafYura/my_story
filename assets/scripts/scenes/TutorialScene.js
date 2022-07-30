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
			this.addTopText();
		},this.animDuration),
		this.pointerStartTimer = this.delayedCall(this.startMovingPointer, 2000);
		this.setEvents()
	}
	setEvents(){
		this.events.once("lexiChanged", ()=>{
			console.log("lexiChanged");
			
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
	addPointer(){
		this.pointer = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height*2, 'pointer').setScale(0.25).setOrigin(0.2);
	}
	startMovingPointer(){
		this.addPointer();
		this.pointerTimer = this.delayedCallR(this.movePointer,1000);
	}
	movePointer(){
		console.log(this.buttonToPoint)
		this.tweens.add({
			targets: this.pointer,
			x: this.buttonToPoint?this.rb.x:this.lb.x,
			y: this.buttonToPoint?this.rb.y:this.lb.y,
			ease: 'Linear',
			duration:this.animDuration,
			onComplete:()=>{
				this.buttonToPoint = !this.buttonToPoint;
			}
		})
	}
}