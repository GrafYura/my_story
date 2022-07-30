class PreloadScene extends Phaser.Scene { 
	constructor(){
		super("Preload");
	}
	preload() {
		this.load.image('lexiBody', '/assets/sprites/female/body.png');
		this.load.image('lexiHair', '/assets/sprites/female/hair.png');
		
		this.load.atlas('lexiEmotions', '/assets/sprites/female/emotions.png', '/assets/sprites/female/emotions.json');
		this.load.atlas('lexiClothes', '/assets/sprites/female/clothes.png', '/assets/sprites/female/clothes.json');
		this.load.atlas('lexiClothesTop', '/assets/sprites/female/clothesTop.png', '/assets/sprites/female/clothesTop.json');
		this.load.atlas('lexiBags', '/assets/sprites/female/bags.png', '/assets/sprites/female/bags.json');
		this.load.atlas('lexiAccessories', '/assets/sprites/female/accessories.png', '/assets/sprites/female/accessories.json');
		
		this.load.image('paulBody', '/assets/sprites/male/body.png');
		this.load.image('paulHair', '/assets/sprites/male/hair.png');
		
		this.load.atlas('paulEmotions', '/assets/sprites/male/emotions.png', '/assets/sprites/male/emotions.json');

		this.load.atlas('switch', '/assets/sprites/switch.png', '/assets/sprites/switch.json');
		
		this.load.image('SB_accessory1', '/assets/sprites/selectButtons/accessory1.png');
		this.load.image('SB_accessory2', '/assets/sprites/selectButtons/accessory2.png');
		this.load.image('SB_accessory3', '/assets/sprites/selectButtons/accessory3.png');
		this.load.image('SB_bag1', '/assets/sprites/selectButtons/bag1.png');
		this.load.image('SB_bag2', '/assets/sprites/selectButtons/bag2.png');
		this.load.image('SB_clothes1', '/assets/sprites/selectButtons/clothes1.png');
		this.load.image('SB_clothes2', '/assets/sprites/selectButtons/clothes2.png');
		this.load.image('SB_place1', '/assets/sprites/selectButtons/place1.png');
		this.load.image('SB_place2', '/assets/sprites/selectButtons/place2.png');
		
		this.load.image('speach_Paul1', '/assets/sprites/speaches/Paul1.png');
		this.load.image('speach_Paul2', '/assets/sprites/speaches/Paul2.png');
		this.load.image('speach_Paul3', '/assets/sprites/speaches/Paul3.png');
		this.load.image('speach_Lexi1', '/assets/sprites/speaches/Lexi1.png');
		
		this.load.image('playNow', '/assets/sprites/playNow.png');
		this.load.image('tryAgain', '/assets/sprites/tryAgain.png');
		this.load.image('pointer', '/assets/sprites/pointer.png');
		this.load.image('topTextBg', '/assets/sprites/topTextBg.png');
	}
	create() {
		this.scene.start('Start');
	}
}