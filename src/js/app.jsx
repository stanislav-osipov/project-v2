var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;

function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
};

var cart = {
	summary: {
		count: 0,
		price: 0
	},
	list: []
};

var categories = [ //for search pop-up
	{ name: 'Volleyball gear', url: '/wares/volleyball'},
	{ name: 'Basketball gear', url: '/wares/basketball'},
	{ name: 'Football gear', url: '/wares/football'},
	{ name: 'Gym gear', url: '/wares/gym'},
	{ name: 'Cycling gear', url: '/wares/cycling'},
	{ name: 'Athletic gear', url: '/wares/athletic'},
	{ name: 'Nice ball', url: '/wares/volleyball/Nice Ball'},
	{ name: 'Nice beach ball', url: '/wares/volleyball/Beach Ball'},
	{ name: 'Nice shoes', url: '/wares/basketball/Nice Shoes'},
	{ name: 'Nice knee pads', url: '/wares/basketball/Nice Knee Pads'},
	{ name: 'Nice beach net', url: '/wares/basketball/Nice Beach Net'}
];

module.exports.CatalogItem = CatalogItem;
module.exports.categories = categories;
module.exports.cart = cart;

var CategoryPage = require('./components/CategoryPage.jsx');
var WaresPage = require('./components/WaresPage.jsx');
var WareCardPage = require('./components/WareCardPage.jsx');
var CartPage = require('./components/CartPage.jsx');
var CardsPage = require('./components/CardsPage.jsx');
var AddressPage = require('./components/AddressPage.jsx');

var App = React.createClass({
	render() {
		return (<div className="Application"> {this.props.children} </div>);
	}
});

window.addEventListener("DOMContentLoaded", function() {
		ReactDOM.render((
			<Router>
				<Route path="/" component={App}>
					<IndexRoute component={CategoryPage}/>
					<Route path="wares/:name" component={WaresPage}/>
					<Route path="wares/:categoryName/:itemName" component={WareCardPage}/>
					<Route path="cart" component={CartPage}/>
					<Route path="cards" component={CardsPage}/>
					<Route path="address" component={AddressPage}/>
				</Route>
			</Router>
		), document.getElementById('page'));
});