var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var CatalogItem = require('../app.jsx').CatalogItem;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var WareCard = require('./WareCard.jsx');
var Path = require('./Path.jsx');

var WareCardPage = React.createClass({
	getDefaultProps: function () {
		function ItemFull(name, image, ref, description, price, rating) {
			CatalogItem.call(this, name, image, ref)
			this.description = description
			this.price = price
			this.rating = rating
		}
		ItemFull.prototype = Object.create(CatalogItem.prototype)
		
		var items = {
			'Nice Ball': new ItemFull("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "This is a very nice ball. Official size and weight. Round.", 555, 5),
			'Beach Ball': new ItemFull("Nice beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "This is a very nice beach ball. Official size and weight. Round.", 444, 4),
			'Nice Shoes': new ItemFull("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "This is a very nice shoes. Little weight and high durability.", 333, 3),
			'Nice Knee Pads': new ItemFull("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "This is a very nice knee pads. Little weight and high durability.", 111, 4),
			'Nice Beach Net': new ItemFull("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "This is a very nice beach net. Yellow.", 1111, 3)
		}

		return {
		  item: items
		}
	},

	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
				
					<Path categoryName={this.props.params.categoryName} itemName={this.props.params.itemName}/>
				
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__content">
							<WareCard item={this.props.item[this.props.params.itemName]} categoryName={this.props.params.categoryName}/>
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

module.exports = WareCardPage;