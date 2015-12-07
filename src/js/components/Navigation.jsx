var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="navigation">
				<Link to="/cart">
					<img className="navigation__image" src="images/navigation/cart.png" alt="cart"/>
				</Link>
				<a href="#loginWindow"> <img className="navigation__image" src="images/navigation/account.png" alt="acc"/> </a>
      </div>
    );
  }
});

module.exports = Navigation;
	