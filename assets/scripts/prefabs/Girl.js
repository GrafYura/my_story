class Girl extends Boy{
	initClothes(){
		this.clothes = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Clothes`, this.conf.clothes);
		this.prepare(this.clothes);
	}
	initAccessory(){
		this.accessories = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Accessories`, this.conf.accessory);
		this.prepare(this.accessories);
	}
	initBag(){
		this.bags = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Bags`, this.conf.bag);
		this.prepare(this.bags);
	}
	initClothesTop(){
		this.clothesTop = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}ClothesTop`, this.conf.clothesTop);
		this.prepare(this.clothesTop);
	}
	
	setClothes(n){
		this.clothes.setFrame(`clothes${n}`);
		this.clothesTop.setFrame(`clothesTop${n}`);
	}
	
	setAccessory(n){
		this.accessories.setFrame(`accessory${n}`);

	}
	setBag(n){
		this.bags.setFrame(`bag${n}`);

	}
	initAdditional(){
		this.initClothes();
		this.initAccessory();
		this.initBag()
		this.initClothesTop();
	}

	update(){
		getProp()
		this.updateOne(this);		
		this.updateOne(this.emotion);		
		this.updateOne(this.hair);		
		this.updateOne(this.clothes);		
		this.updateOne(this.accessories);		
		this.updateOne(this.bags);		
		this.updateOne(this.clothesTop);		
	}
	updateFrames(){
		Poof.generate(this.conf.scene, this.x, this.y);
		this.conf.scene.time.addEvent({
			delay:300,
			callback:()=>{
				this.clothes.setFrame(this.conf.clothes);
				this.accessories.setFrame(this.conf.accessory);
				this.bags.setFrame(this.conf.bag);
				this.clothesTop.setFrame(this.conf.clothesTop);	
			},
			callbackScope:this,
		})
	}

	static generate(data){
		return new Girl(data);
	}
}