var React = require('react');
var Link = require('react-router').Link;

var Search = require('./Search.jsx');
var Navigation = require('./Navigation.jsx');

var App = require('../app.jsx');

var categories = App.categories;

var Header = React.createClass({
  render: function () {		
    return (
      <div className="header">
				<Link to="/" className="header__logo-img">
					<img className="logo-img" src="images/navigation/logo.png" alt="Logo"/>
				</Link>

				<div className="header__logo-text">
					<i> Sports gear e-shop </i>
				</div>
								
				<div className="header__search"> 
					<Search items={categories}/>
				</div>
				
				<div className="header__navigation"> 
					<Navigation />
				</div>
      </div>
    );
  }
})

module.exports = Header;

	