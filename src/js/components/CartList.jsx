var React = require('react');
var Link = require('react-router').Link;

var CartListItem = require('./CartListItem.jsx');

var CartList = React.createClass({
		
	render: function () {
		var self = this;
	  
		var waresListVDOM = [];
		for (var key in this.props.waresList) {	
			waresListVDOM.push(<CartListItem key={key} ware={this.props.waresList[key]} />);
		};
		
		var continueButton;
		var cartSummary;
		
		if (this.props.summary.count != 0) {
			continueButton = (
				<Link to="/address">
					<input className="add-button add-button--continue" type="button" value="Proceed to chekout" />
				</Link>
				);
				
			cartSummary = (
				<div className="menu menu--in-cart page__menu page__menu--in-cart">
					<div> Bascet summary </div>
					<div className="item__description--short"> ({this.props.summary.count} items) </div>
					<hr className="menu__line menu__line--in-cart" />
					<div className="price--in-summary"> ${this.props.summary.price} </div>
					<hr className="menu__line menu__line--in-cart" />
					<div className="continue continue--in-summary">
						<Link to="/address"> 
							<input className="add-button add-button--in-summary" type="button" value="Proceed to chekout" />
						</Link>
					</div>
				</div>
			);
		} else {
			continueButton = null; 
			cartSummary = null;
		}
			
    return (
				<div id="content-wrapper" className="content-wrapper">
		
					{cartSummary}
				
					<div className="page__content page__content--in-cart">	
			
						<div className="content">
							{waresListVDOM}
								
							<div className="item content__item content__item--extend content__item--in-cart content__item--cart-total"> 
								<div className="item__price">
									<i> {this.props.summary.count ? ("Total: $" + this.props.summary.price) : "Cart is empty"} </i>
									<hr/>
								</div>
									
								<div className="continue">
									<Link to="/">
										<input className="add-button add-button--continue" type="button" value="Continue shopping" />
									</Link>
									{continueButton}
								</div>
							</div>
								
						</div>
					</div>
				</div>
    );
  }
});

module.exports = CartList;