var CategoryPage = React.createClass({
	getDefaultProps: function () {
		function CategoryItem(name, image, ref, count) {
			CatalogItem.call(this, name, image, ref)
			this.count = count
		}
		CategoryItem.prototype = Object.create(CatalogItem.prototype)
		var categories = []
			categories.push(new CategoryItem("Volleyball gear", "volleyball.jpg", "item_list.html", "32"))
			categories.push(new CategoryItem("Basketball gear", "basketball.jpg", "item_list1.html", "41"))
			categories.push(new CategoryItem("Football gear", "football.jpg", "item_list.html", "54"))
			categories.push(new CategoryItem("Gym gear", "gym.jpg", "item_list.html", "17"))
			categories.push(new CategoryItem("Cycling gear", "cycling.jpg", "item_list.html", "23"))
			categories.push(new CategoryItem("Athletic gear", "athlet.jpg", "item_list.html", "11"))
		
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
})