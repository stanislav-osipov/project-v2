var $ = require('jQuery');

var React = require('react');
var Link = require('react-router').Link;

var CatalogItem = require('../app.jsx').CatalogItem;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var WaresList = require('./WaresList.jsx');
var Menu = require('./Menu.jsx');

var AccountActions = require('../actions/AccountActions');
var DataActions = require('../actions/DataActions');
var DataStore = require('../stores/DataStore');

var WaresPage = React.createClass({	
	getInitialState: function() {
    return {
      menuCategories: [],
			waresList: [],
			view: "Grid"
		};
  },
	
	componentWillMount: function() {
		AccountActions.update({needLogin: false});		
	},
	
	componentDidMount: function() {
		DataStore.addChangeMenuListener(this._onMenuReceive);
		DataStore.addChangeWaresListListener(this._onListReceive);
		DataActions.receiveMenu();
		DataActions.receiveWaresList(this.props.params.name);
	},
	
	componentWillUnmount: function() {
    DataStore.removeChangeMenuListener(this._onMenuReceive);
		DataStore.removeChangeWaresListListener(this._onListReceive);
  },
	
	componentWillReceiveProps: function(nextProps) {
		DataActions.receiveWaresList(nextProps.params.name);
	},
	
	_onMenuReceive: function() {
		this.setState({
			menuCategories: DataStore.getCategoriesMenu(),
		});
	},
	
	_onListReceive: function() {
		this.setState({
			waresList: DataStore.getWaresList(),
		});
	},
	
	handleChangeView: function() {
		if (this.state.view == "Grid") {
			this.setState({ view: "List" });	
		} else {
			this.setState({ view: "Grid" });
		};
	},
	
	render: function() {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">	
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__menu">
							<Menu menuCategories={this.state.menuCategories} category={this.props.params.name}/>
						</div>
					
						<div className="page__content">
							<div className="content__view-option">
								<div className="view-option"> <div className="item__link" onClick={this.handleChangeView}> {this.state.view} View </div> </div>
							</div>
							<WaresList wares={this.state.waresList} category={this.props.params.name} view={this.state.view}/>
						</div>
					</div>
					
					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = WaresPage;