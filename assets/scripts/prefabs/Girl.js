class Girl extends Boy{
	initClothes(){
		this.clothes = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Clothes`, 'clothes0');
		this.prepare(this.clothes);
	}
	initAccessory(){
		this.accessories = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Accessories`, 'accessory0');
		this.prepare(this.accessories);
	}
	initBag(){
		this.bags = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}Bags`, 'bag0');
		this.prepare(this.bags);
	}
	initClothesTop(){
		this.clothesTop = this.conf.scene.add.sprite(this.x, this.y, `${this.conf.char}ClothesTop`, 'clothesTop0');
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
		this.updateOne(this);		
		this.updateOne(this.emotion);		
		this.updateOne(this.hair);		
		this.updateOne(this.clothes);		
		this.updateOne(this.accessories);		
		this.updateOne(this.bags);		
		this.updateOne(this.clothesTop);		
	}

	static generate(data){
		return new Girl(data);
	}
}