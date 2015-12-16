var React = require('react');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CartList = require('./CartList.jsx');

var Navigation = require('./Navigation.jsx');

var CartStore = require('../stores/CartStore');
var AccountStore = require('../stores/AccountStore');
var AccountActions = require('../actions/AccountActions');

var CartPage = React.createClass({
	getInitialState: function() {
		return CartStore.getItemsState();
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
	
	_onChange: function() {
    this.setState(CartStore.getItemsState());
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
  }
});

module.exports = CartPage;