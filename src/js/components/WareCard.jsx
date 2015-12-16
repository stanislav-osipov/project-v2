var _ = require('underscore');

var React = require('react');
var Link = require('react-router').Link;

var Gallery = require('./Gallery.jsx');

var CartActions = require('../actions/CartActions');
var CartStore = require('../stores/CartStore');
var AccountStore = require('../stores/AccountStore');

var WareCard = React.createClass({
	getInitialState: function(){
		return { count: "1" };
	},
	
	handleCountChange: function(e){
		this.setState({count: e.target.value});
	},	 
	
	componentWillReceiveProps: function(){
		this.state = this.getInitialState();
	},
	
	handleClickToCart: function() {
		var exist = false;
		var cartList = CartStore.getAll();
		for (var key in cartList) {
			if (cartList[key].item.name == this.props.item.name) {
				exist = true;
				CartActions.update(key, this.state.count, AccountStore.getAcc().remember);
				break;
			};
		};
		if (!exist) {
			CartActions.create(this.props.item, this.state.count, AccountStore.getAcc().remember);
		};
	},
		
  render: function () {
    var self = this;
		
		var maxRating = 5;
		var rating = [];
		for (var i = 1; i <= maxRating; i++){
			if (i <= this.props.item.rating) {
					rating.push(<img key={"star " + i} className="star-img" src="images/navigation/star1.png" alt="star1"/>);
			} else {
				rating.push(<img key={"star " + i} className="star-img" src="images/navigation/star0.png" alt="star0"/>);
			}
		}
		
    return (
      <div className="content">
			
				<Gallery name={this.props.item.name} image={this.props.item.image}/>
			
				<div className="item content__item item__description content__item--in-card">
					<div>
						<div className="item__big-name"> <h1> <i> {this.props.item.name} </i> </h1> </div>
						<div>
							{rating}
						</div>
					</div>
					<hr/>
					<div> 
						{this.props.item.description}
					</div>
					<hr/>
					
					<div className="price">
						Price: ${this.props.item.price}
					</div>
					
					<div className="item__byu-options">
						<div>
							Quantity: 
							<input className="select-quantity" type="number" min="1" max="10" value={this.state.count} onChange={this.handleCountChange}/>
						</div>
						
						<Link to={"/cart"}>
							<input className="add-button" type="button" value="Add to cart" onClick={this.handleClickToCart}/>
						</Link>
					</div>
					
					<div className="social">
						<img className="social__img" src="images/social/Facebook.png" alt="social"/>
						<img className="social__img" src="images/social/Google+.png" alt="social"/>
						<img className="social__img" src="images/social/RSS.png" alt="social"/>
						<img className="social__img" src="images/social/Share.png" alt="social"/>
					</div>

				</div>
      </div>
    );
  }
});

module.exports = WareCard;