var CartList = React.createClass({
	getInitialState: function(){
		/*var cnt = [];
		for (var i = 0; i < this.props.waresList.length; i++) {cnt.push(1)}*/
		return { count: cart.count};
	},
	
	handleChange: function(e){
		var self = this;
		var dif = 0;		
		
		dif = this.state.count[e.target.alt];
		
		this.setState(function(previousState, currentProps) {
			var n = previousState;
			n.count[e.target.alt] = e.target.value; 
			return { count: n.count}
		});
		dif = -(dif - e.target.value);
		//console.log(dif);
		//to-do: "-"
		cart.summary.price = cart.summary.price + dif * this.props.waresList[e.target.alt].price;
		//this.forceUpdate();
		window.location.href = "#/cart";
	},	 
	
	componentWillUnmount: function() {
		cart.count = this.state.count;	
	},
	
	componentWillMount: function() {
		cart.summary.price = 0;
		for (var i = 0; i < this.props.waresList.length; i++) {cart.summary.price = cart.summary.price + this.state.count[i] * this.props.waresList[i].price;}	
	},
	
	handleRemoveClick: function(e) {
		cart.summary.price = cart.summary.price - this.state.count[e.target.alt] * this.props.waresList[e.target.alt].price;
		cart.list.splice(e.target.alt, 1);
		window.location.href = "#/cart";
	},
		
	render: function () {
		var self = this;
	  
		var waresListVDOM = [];
		for (var i = 0; i < this.props.waresList.length; i++) {	
			waresListVDOM.push(
				<div className="item content__item content__item--extend content__item--in-cart" key={"cart " + i}>
					<Link to={"/wares/" + this.props.waresList[i].ref} className="item__link">
						<img className="item__image" src={"images/categories/" + this.props.waresList[i].image} alt="Item"/>
					</Link> 
					
					<div className="item__description item__description--short">
						<h1> <i> <Link to={"/wares/" + this.props.waresList[i].ref} className="item__link"> {this.props.waresList[i].name} </Link> </i> </h1>
						
						<div className="item__price">
							${this.props.waresList[i].price}
						</div>
						
						<hr/>
							<div>
								Quantity: 
								<input className="select-quantity" type="number" min="1" max="10" alt={i} value={this.state.count[i]} onChange={this.handleChange}/>
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
	<div className="content">
			{waresListVDOM}
				
				<div className="item content__item content__item--extend content__item--in-cart content__item--cart-total"> 
					<div className="item__price">
						<i> Total: ${cart.summary.price} </i>
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
    );
  }
})