var Navigation = React.createClass({
  render: function () {
    return (
      <div className="navigation">
				<a href="cart.html"> <img className="navigation__image" src="images/navigation/cart.png" alt="cart"/> </a>
				<a href="#loginWindow"> <img className="navigation__image" src="images/navigation/account.png" alt="acc"/> </a>
      </div>
    );
  }
})
	