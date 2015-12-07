var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var CatalogItem = require('../app.jsx').CatalogItem;
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CategoryList = require('./CategoryList.jsx');

var CategoryPage = React.createClass({
	getDefaultProps: function () {
		function CategoryItem(name, image, ref, count) {
			CatalogItem.call(this, name, image, ref)
			this.count = count
		}
		CategoryItem.prototype = Object.create(CatalogItem.prototype)
		var categories = []
			categories.push(new CategoryItem("Volleyball gear", "volleyball.jpg", "volleyball", "32"))
			categories.push(new CategoryItem("Basketball gear", "basketball.jpg", "basketball", "41"))
			categories.push(new CategoryItem("Football gear", "football.jpg", "football", "54"))
			categories.push(new CategoryItem("Gym gear", "gym.jpg", "gym", "17"))
			categories.push(new CategoryItem("Cycling gear", "cycling.jpg", "cycling", "23"))
			categories.push(new CategoryItem("Athletic gear", "athlet.jpg", "athletic", "11"))
		
		return {
		  categories
		}
	},

	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__content">
							<CategoryList categories={this.props.categories}/>
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

module.exports = CategoryPage;