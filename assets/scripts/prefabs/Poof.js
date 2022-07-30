class Poof extends Phaser.GameObjects.Sprite {
	static generate(scene,x,y){
		return new Poof({scene,x,y});
	}
	constructor(data){
		super(data.scene, data.x, data.y, 'switch', 'switch1');
		this.scene.add.existing(this);
		const frames = this.scene.anims.generateFrameNames('switch', {
			prefix:'switch',
			start:1,
			end:5,
		});

		this.scene.anims.create({
			key: 'Poof',
			frames,
			frameRate:12,
			repeat:0,
		});
		this.play('Poof');
		this.once('animationcomplete', ()=>{this.destroy()}, this)
	}
}