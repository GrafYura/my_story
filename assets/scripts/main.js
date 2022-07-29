var config = {
	type: Phaser.AUTO, // webgl or canvas
	// width: window.innerWidth-4,
  // height: window.innerHeight-4,
	scale: {
		mode: Phaser.Scale.ENVELOP,
		parent: 'phaser-example',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1080,
		height: 900
	},
	physics:{
		default: 'arcade',
		arcade: {
			debug: false
		},
	},
	scene:[BootScene, PreloadScene, StartScene],
};
let game = new Phaser.Game(config);
function getProp(){
	let h = window.innerHeight;
	let w = window.innerWidth;
	let h2 = game.config.height;
	let w2 = game.config.width;
	let proph = h/h2;
	let propw = w/w2;
	let propDif = h/w-h2/w2
	let res = {
		proph,
		propw,
		propDif
	}
	return res
}