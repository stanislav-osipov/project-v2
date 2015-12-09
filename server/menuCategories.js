function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
};

var menuCategories = [];

menuCategories.push(new CatalogItem("Volleyball gear", "rugby.png", "volleyball"));
menuCategories.push(new CatalogItem("Basketball gear", "basketball.png", "basketball"));
menuCategories.push(new CatalogItem("Football gear", "soccer.png", "football"));
menuCategories.push(new CatalogItem("Gym gear", "dumbbell.png", "gym"));
menuCategories.push(new CatalogItem("Cycling gear", "bicycle.png", "cycling"));
menuCategories.push(new CatalogItem("Athletic gear", "running.png", "athletic"));

module.exports = menuCategories;