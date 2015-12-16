var _ = require('lodash');

var React = require('react');
var Link = require('react-router').Link;

var CartStore = require('../stores/CartStore');
var CartActions = require('../actions/CartActions');
var AccountStore = require('../stores/AccountStore');

var GridListItem = React.createClass({
	
	handleClickToCart: function() {
		if (CartStore.Exist(this.props.ware)) {
			CartActions.update(CartStore.Exist(this.props.ware), 1, AccountStore.getAcc().remember);
		} else {
			CartActions.create(this.props.ware, 1, AccountStore.getAcc().remember);
		};
	}, 
	
	render: function () {
		var key = this.props.key;
		var ware = this.props.ware;

    return (
			<div className="item content__item content__item--extend" key={key + 2500}>
				<Link to={"/wares/" + ware.ref} className="item__link" >
					<img className="item__image" src={"images/categories/" + ware.image} alt={"Item" + (key - 2500)}/>
				</Link>

				<div className="item__description item__description--short">
					<h1> <i> <Link to={"/wares/" + ware.ref} className="item__link"> 
						{ware.name}
					</Link> </i> </h1>
					
					<div className="item__price">
						Price: ${ware.price}
					</div>
					
					<hr/>
					<div className="item__text--grid"> 
						{ware.description}  
					</div>
					<hr/>
						
					<div className="item__byu-options">		
						<div>
							<input className="add-button" type="button" value="Add to cart" onClick={this.handleClickToCart}/>
						</div>
					</div>
				</div>		
				 
			</div>	
    );
  }
});

module.exports = GridListItem;