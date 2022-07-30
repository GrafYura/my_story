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
	scene:[BootScene, PreloadScene, IntroScene, TutorialScene, Round1Scene, Round2Scene, Round3Scene, AmazingScreenScene, LooseScreenScene, EndScene],
};
let game = new Phaser.Game(config);
var prop = {};
getProp();
var url = "https://apps.apple.com/us/app/id1491717191" 
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
	prop=res
}