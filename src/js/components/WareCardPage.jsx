var React = require('react');
var Link = require('react-router').Link;

var CatalogItem = require('../app.jsx').CatalogItem;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var WareCard = require('./WareCard.jsx');
var Path = require('./Path.jsx');

var AccountActions = require('../actions/AccountActions');
var DataActions = require('../actions/DataActions');
var DataStore = require('../stores/DataStore');

var WareCardPage = React.createClass({
	getInitialState: function() {
    return {
      item: {image: "empty.png"}
		};
  },
	
	componentWillMount: function() {
		AccountActions.update({needLogin: false});
	},
	
	componentDidMount: function() {
		DataStore.addChangeWareListener(this._onWareReceive);
		DataActions.receiveWare(this.props.params.itemName);
	},
	
	componentWillUnmount: function() {
    DataStore.removeChangeWareListener(this._onWareReceive);
  },
	
	componentWillReceiveProps: function(nextProps) {
		DataActions.receiveWare(nextProps.params.itemName);
	},
	
	_onWareReceive: function() {
		this.setState({
			item: DataStore.getWare(),
		});
	},

	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
				
					<Path categoryName={this.props.params.categoryName} itemName={this.props.params.itemName}/>
				
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__content">
							<WareCard item={this.state.item} categoryName={this.props.params.categoryName}/>
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

module.exports = WareCardPage;