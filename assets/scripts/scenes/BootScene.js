class BootScene extends Phaser.Scene { 
	constructor(){
		super("Boot");
	}
	preload() {
		console.log('BootScene.preload');
		this.load.atlas('bg', '/assets/sprites/backgrounds/bg.png', '/assets/sprites/backgrounds/bg.json');
	}
	create() {
		console.log('BootScene.create');
		this.bg = this.add.sprite(config.width/2, config.height/2, 'bg', 'bg0').setOrigin(0.5);
		this.bg.setScale(config.height/this.bg.height+0.02)
		this.scene.start('Preload');
	}
}