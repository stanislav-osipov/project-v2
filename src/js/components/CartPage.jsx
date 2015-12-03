var CartPage = React.createClass({
	getInitialState: function(){
		return { count: "1" };
	},
	
	handleCountChange: function(c){
		this.setState({count: c.target.value});
	},	 
	
	componentWillReceiveProps: function(){
		this.state = this.getInitialState();
	},
	
	/*handleClickToCart: function() {
		cart.push(this.props.item);
		alert(cart);
	},*/
		
  render: function () {
    var self = this;
		
    return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">		
					<div id="content-wrapper" className="content-wrapper">
					
						<div className="menu menu--in-cart page__menu page__menu--in-cart">
							<div> Bascet summary </div>
							<div className="item__description--short"> ({cart.summary.count} items) </div>
							<hr className="menu__line menu__line--in-cart" />
							<div className="price--in-summary"> ${cart.summary.price} </div>
							<hr className="menu__line menu__line--in-cart" />
							<div className="continue continue--in-summary">
								<input className="add-button add-button--in-summary" type="button" value="Proceed to chekout" />
							</div>
						</div>
					
						<div className="page__content page__content--in-cart">
						
							<CartList waresList={cart.list} price={cart.summary.price} last={this.props.params.categoryName}/>
	
						</div>
					</div>
					
					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
    );
  }
})