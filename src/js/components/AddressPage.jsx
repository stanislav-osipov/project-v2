var React = require('react');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var AddressPage = React.createClass({
	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
					<div id="content-wrapper" className="content-wrapper">
						<div className="content page__content page__content--in-address">
							<div className="item content__item content__item--in-address">
								<h1> Shipping address </h1>
								<div> Country <input className="item__input" type="text"/> </div>
								<div> City <input className="item__input" type="text"/> </div>
								<div> Address <input className="item__input" type="text"/> </div>
								<div> ZIP <input className="item__input" type="text"/> </div>
								<div> <input type="checkbox"/> My billing address is the same </div>
							</div>
							
							<div className="item content__item content__item--in-address">
								<h1> Billing address </h1>
								<div> Country <input className="item__input" type="text"/> </div>
								<div> City <input className="item__input" type="text"/> </div>
								<div> Address <input className="item__input" type="text"/> </div>
								<div> ZIP <input className="item__input" type="text"/> </div>
								<div> <input type="checkbox"/> My shipping address is the same </div>
							</div>
							
							<div className="continue">
								<Link to="/cards">
									<input className="add-button add-button--to-pay" type="button" value="Payment"/>
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

module.exports = AddressPage;