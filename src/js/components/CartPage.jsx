var React = require('react');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CartList = require('./CartList.jsx');

var Navigation = require('./Navigation.jsx');

var CartStore = require('../stores/CartStore');
var AccountStore = require('../stores/AccountStore');
var AccountActions = require('../actions/AccountActions');

function getSummary(obj) {
	var price = 0;
	for (var id in obj) {
		price = price + obj[id].item.price * obj[id].count;
	}
			
	return {
		price:	price,
		count: Object.keys(obj).length
	}
};

function getItemsState() {
	return {
		allItems: CartStore.getAll(),
		summary: getSummary(CartStore.getAll())
	};
};

var CartPage = React.createClass({
	getInitialState: function() {
		return getItemsState();
	},
	
	componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },
	
	componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },
	
	componentWillMount: function() {
		if (!AccountStore.getAcc().logged) {
			AccountActions.update({needLogin: true});
		}
  },
	
  render: function () {
    var self = this;
		
    return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">		
							
					<CartList waresList={this.state.allItems} summary={this.state.summary}/>

					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
    );
  },
	
	_onChange: function() {
    this.setState(getItemsState());
  }
});

module.exports = CartPage;