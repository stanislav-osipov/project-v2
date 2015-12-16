var React = require('react');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var CartStore = require('../stores/CartStore');

var CardsPage = React.createClass({
	
	handleByu: function() {
		CartStore.setAll({});
		localStorage.cart = "";
	},
	
	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
					<div id="content-wrapper" className="content-wrapper">
						<div className="content content--in-card page__content page__content--in-address">

							<div className="card-face">  
								<div> 
									<input className="card-face__input" type="text"/> 
								</div>
								
								<div> 
									<input className="card-face__input card-face__input--date" type="month"/> 
								</div>
										
								<div> 
									<input className="card-face__input card-face__input--username" type="text"/> 
								</div>
								
							</div>
							
							<div className="card-face card-face--back"> 
								<div>
									<input className="card-face__input card-face__input--pin" type="text"/>
								</div>
							</div>
						
						
							<div className="continue">
								<Link to="/success">
									<input className="add-button add-button--to-pay" type="button" value="Pay" onClick={this.handleByu} />
								</Link>
							</div>
							
						</div>
					</div>
					
					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CardsPage;