function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
};

function CategoryItem(name, image, ref, count) {
	CatalogItem.call(this, name, image, ref);
	this.count = count;
}
CategoryItem.prototype = Object.create(CatalogItem.prototype)

var categories = [];

categories.push(new CategoryItem("Volleyball gear", "volleyball.jpg", "volleyball", "32"));
categories.push(new CategoryItem("Basketball gear", "basketball.jpg", "basketball", "41"));
categories.push(new CategoryItem("Football gear", "football.jpg", "football", "54"));
categories.push(new CategoryItem("Gym gear", "gym.jpg", "gym", "17"));
categories.push(new CategoryItem("Cycling gear", "cycling.jpg", "cycling", "23"));
categories.push(new CategoryItem("Athletic gear", "athlet.jpg", "athletic", "11"));

module.exports = categories;