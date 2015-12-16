var React = require('react');
var Link = require('react-router').Link;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var SuccessPage = React.createClass({
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
								<h1> Thank you for  purchase! </h1>
							</div>
							
							<div className="continue">
								<Link to="/">
									<input className="add-button add-button--to-pay" type="button" value="Return to shop"/>
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

module.exports = SuccessPage;