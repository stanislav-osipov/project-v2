var WareCard = React.createClass({
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
		  categories: categories,
			category: "ggg"
		}
	},

	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
				
					<Path category={this.props.category} itemName={this.props.params.name}/>
				
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