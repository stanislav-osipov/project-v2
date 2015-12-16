function CatalogItem(name, image, ref) {
	this.name = name;
	this.image = image;
	this.ref = ref;
};

function WaresItem(name, image, ref, price, description) {
	CatalogItem.call(this, name, image, ref);
	this.price = price;
	this.description = description;
};
WaresItem.prototype = Object.create(CatalogItem.prototype);

var wares = {volleyball: [], basketball: [], football: [], gym: [], cycling: [], athletic: []};
wares.volleyball.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "volleyball/Nice Ball", 555, "This is a very nice ball. Official size and weight. Round."));
wares.volleyball.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "volleyball/Beach Ball", 444, "This is a very nice beach ball. Official size and weight. Round."));

wares.basketball.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "basketball/Nice Shoes", 333, "This is a very nice shoes. Little weight and high durability."));
wares.basketball.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "basketball/Nice Knee Pads", 111, "This is a very nice knee pads. Little weight and high durability."));
wares.basketball.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "basketball/Nice Beach Net", 1111, "This is a very nice beach net. Yellow."));

wares.football.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "football/Nice Ball", 555, "This is a very nice ball. Official size and weight. Round."));
wares.football.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "football/Beach Ball", 444, "This is a very nice beach ball. Official size and weight. Round."));
wares.football.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "football/Nice Shoes", 333, "This is a very nice shoes. Little weight and high durability."));

wares.gym.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "gym/Nice Knee Pads", 111, "This is a very nice knee pads. Little weight and high durability."));
wares.gym.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "gym/Nice Beach Net", 1111, "This is a very nice beach net. Yellow."));

wares.cycling.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "cycling/Nice Ball", 555, "This is a very nice ball. Official size and weight. Round."));
wares.cycling.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "cycling/Beach Ball", 444, "This is a very nice beach ball. Official size and weight. Round."));

wares.athletic.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "athletic/Nice Shoes", 333, "This is a very nice shoes. Little weight and high durability."));
wares.athletic.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "athletic/Nice Knee Pads", 111, "This is a very nice knee pads. Little weight and high durability."));
wares.athletic.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "athletic/Nice Beach Net", 1111, "This is a very nice beach net. Yellow."));

module.exports = wares;