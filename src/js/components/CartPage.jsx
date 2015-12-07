var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CartList = require('./CartList.jsx');

var cart = require('../app.jsx').cart;

var CartStore = require('../stores/CartStore');

var CartPage = React.createClass({
  render: function () {
    var self = this;
		
    return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">		
							
					<CartList waresList={cart.list} summary={cart.summary}/>

					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
    );
  }
});

module.exports = CartPage;