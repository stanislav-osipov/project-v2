function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
};

function ItemFull(name, image, ref, description, price, rating) {
	CatalogItem.call(this, name, image, ref)
	this.description = description
	this.price = price
	this.rating = rating
};
ItemFull.prototype = Object.create(CatalogItem.prototype);

var items = {
	'NiceBall': new ItemFull("Nice ball", "volleyball/ball_mik.jpg", "volleyball/Nice Ball", "This is a very nice ball. Official size and weight. Round.", 555, 5),
	'BeachBall': new ItemFull("Nice beach ball", "volleyball/ball_beach.jpg", "volleyball/Beach Ball", "This is a very nice beach ball. Official size and weight. Round.", 444, 4),
	'NiceShoes': new ItemFull("Nice shoes", "volleyball/vol_shoes.jpg", "volleyball/Nice Shoes", "This is a very nice shoes. Little weight and high durability.", 333, 3),
	'NiceKneePads': new ItemFull("Nice knee pads", "volleyball/knee_pad.jpg", "volleyball/Nice Knee Pads", "This is a very nice knee pads. Little weight and high durability.", 111, 4),
	'NiceBeachNet': new ItemFull("Nice beach net", "volleyball/beach_net.jpg", "volleyball/Nice Beach Net", "This is a very nice beach net. Yellow.", 1111, 3)
};

module.exports = items;