var React = require('react');
var Link = require('react-router').Link;

var CartActions = require('../actions/CartActions');

var CartListItem = React.createClass({
	
	handleChange: function(e){			
		CartActions.update(this.props.ware.id, e.target.value);
	},	 
	
	handleRemoveClick: function() {
		CartActions.destroy(this.props.ware.id);
	},
		
	render: function () {
		
		var id = this.props.ware.id;
		var item = this.props.ware.item;
		var count = this.props.ware.count;
		
    return (
			<div className="item content__item content__item--extend content__item--in-cart" key={id}>
				<Link to={"/wares/" + item.ref} className="item__link">
					<img className="item__image" src={"images/categories/" + item.image} alt="Item"/>
				</Link> 
				
				<div className="item__description item__description--short">
					<h1> <i> <Link to={"/wares/" + item.ref} className="item__link"> {item.name} </Link> </i> </h1>
					
					<div className="item__price">
						${item.price}
					</div>
					
					<hr/>
						<div>
							Quantity: 
							<input className="select-quantity" type="number" min="1" max="10" value={count} onChange={this.handleChange}/>
						</div>				
					<hr/>
					
					<div className="item__byu-options">		
						<div>
							<input className="add-button add-button--remove" type="button" value="X" onClick={this.handleRemoveClick}/>
						</div>
					</div>
					
				</div>
			</div>
    );
  }
});

module.exports = CartListItem;