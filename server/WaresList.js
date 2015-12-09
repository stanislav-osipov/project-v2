function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
};

function WaresItem(name, image, ref, price) {
	CatalogItem.call(this, name, image, ref)
	this.price = price
};
WaresItem.prototype = Object.create(CatalogItem.prototype);

var wares = {volleyball: [], basketball: [], football: [], gym: [], cycling: [], athletic: []};
wares.volleyball.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"));
wares.volleyball.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"));

wares.basketball.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"));
wares.basketball.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"));
wares.basketball.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"));

wares.football.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"));
wares.football.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"));
wares.football.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"));

wares.gym.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"));
wares.gym.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"));

wares.cycling.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"));
wares.cycling.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"));

wares.athletic.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"));
wares.athletic.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"));
wares.athletic.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"));

module.exports = wares;