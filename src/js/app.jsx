function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
}

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

var cart = [

];

var Router = window.ReactRouter.Router;
var Link = window.ReactRouter.Link;
var Route = window.ReactRouter.Route;
var IndexRoute = window.ReactRouter.IndexRoute;

var Redirect = window.ReactRouter.Redirect;

var App = React.createClass({
	render() {
		return (<div className="Application"> {this.props.children} </div>);
	}
})

window.addEventListener("DOMContentLoaded", function() {
  /*ReactDOM.render(
      React.createElement(WaresPage), //CategoryPage
      document.getElementById('page'));*/
		ReactDOM.render((
			<Router>
				<Route path="/" component={App}>
					<IndexRoute component={CategoryPage}/>
					<Route path="wares/:name" component={WaresPage}/>
					<Route path="wares/:categoryName/:itemName" component={WareCardPage}/>
				</Route>
			</Router>
		), document.getElementById('page'));
});