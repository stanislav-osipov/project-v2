function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
}

var categories = [
	{ name: 'Volleyball gear', url: 'item_list.html'},
	{ name: 'Basketball gear', url: 'item_list.html'},
	{ name: 'Football gear', url: 'item_list.html'},
	{ name: 'Gym gear', url: 'item_list.html'},
	{ name: 'Cycling gear', url: 'item_list.html'},
	{ name: 'Athletic gear', url: 'item_list.html'}
];

window.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
      React.createElement(CategoryPage), 
      document.getElementById('page'));
});