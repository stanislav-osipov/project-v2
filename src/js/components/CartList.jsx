var _ = require('underscore');

var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var cart = require('../app.jsx').cart;

var CartList = React.createClass({
	handleChange: function(e){			
		var dif = this.props.waresList[e.target.alt].count;
		this.props.waresList[e.target.alt].count = e.target.value;
		dif = -(dif - e.target.value);
		this.props.summary.price = this.props.summary.price + dif * this.props.waresList[e.target.alt].item.price;
		
		this.forceUpdate();
	},	 
	
	handleRemoveClick: function(e) {
		this.props.summary.price = this.props.summary.price - this.props.waresList[e.target.alt].count * this.props.waresList[e.target.alt].item.price;
		 
		this.props.waresList.splice(_.findIndex(this.props.waresList, {id: this.props.waresList[e.target.alt].id}), 1);
		this.props.summary.count--;

		this.forceUpdate();
	},
		
	render: function () {
		var self = this;
	  
		var waresListVDOM = [];
		for (var i = 0; i < this.props.waresList.length; i++) {	
			waresListVDOM.push(
				<div className="item content__item content__item--extend content__item--in-cart" key={this.props.waresList[i].id}>
					<Link to={"/wares/" + this.props.waresList[i].item.ref} className="item__link">
						<img className="item__image" src={"images/categories/" + this.props.waresList[i].item.image} alt="Item"/>
					</Link> 
					
					<div className="item__description item__description--short">
						<h1> <i> <Link to={"/wares/" + this.props.waresList[i].item.ref} className="item__link"> {this.props.waresList[i].item.name} </Link> </i> </h1>
						
						<div className="item__price">
							${this.props.waresList[i].item.price}
						</div>
						
						<hr/>
							<div>
								Quantity: 
								<input className="select-quantity" type="number" min="1" max="10" alt={i} value={this.props.waresList[i].count} onChange={this.handleChange}/>
							</div>				
						<hr/>
						
						<div className="item__byu-options">		
							<div>
								<input className="add-button add-button--remove" type="button" alt={i} value="X" onClick={this.handleRemoveClick}/>
							</div>
						</div>
						
					</div>
				</div>
			);
		};
			
    return (
				<div id="content-wrapper" className="content-wrapper">
		
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
				
					<div className="page__content page__content--in-cart">	
			
						<div className="content">
							{waresListVDOM}
								
							<div className="item content__item content__item--extend content__item--in-cart content__item--cart-total"> 
								<div className="item__price">
									<i> Total: ${this.props.summary.price} </i>
									<hr/>
								</div>
									
								<div className="continue">
									<Link to="/">
										<input className="add-button add-button--continue" type="button" value="Continue shopping" />
									</Link>
									<Link to="/address">
										<input className="add-button add-button--continue" type="button" value="Proceed to chekout" />
									</Link>
								</div>
							</div>
								
						</div>
					</div>
				</div>
    );
  }
});

module.exports = CartList;