function CatalogItem(name, image, ref) {
	this.name = name
	this.image = image
	this.ref = ref
}

var categories = [ //for search pop-up
	{ name: 'Volleyball gear', url: 'item_list.html'},
	{ name: 'Basketball gear', url: 'item_list.html'},
	{ name: 'Football gear', url: 'item_list.html'},
	{ name: 'Gym gear', url: 'item_list.html'},
	{ name: 'Cycling gear', url: 'item_list.html'},
	{ name: 'Athletic gear', url: 'item_list.html'}
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
					<Route path="item/:name" component={WareCard}/>
				</Route>
			</Router>
		), document.getElementById('page'));
});