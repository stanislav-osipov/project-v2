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
		var self = this;
		
		if (!_.find(cart.list, function(item){return item.name == self.props.item.name;})) {
				if (~this.props.item.ref.indexOf("/") == 0) {
					this.props.item.ref = this.props.categoryName + "/" + this.props.item.ref;	
				}
				cart.list.push(this.props.item);
				cart.summary.price = cart.summary.price + this.state.count * this.props.item.price;
				cart.summary.count++;
		}
		
		cart.count.push(this.state.count)
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
})