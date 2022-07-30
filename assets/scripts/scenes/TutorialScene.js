class TutorialScene extends Phaser.Scene{
	constructor(){
		super("Tutorial");
	}
	createBg(){
		this.bg = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'bg', 'bg0').setOrigin(0.5);
		const graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.5);
		graphics.fillRoundedRect(0, 0, this.sys.game.config.width, this.sys.game.config.height);
	}
	create(data){
		this.createBg()
		console.log(data)
		this.lexi=Girl.generate({...data.lexi, scene:this});
	}
}