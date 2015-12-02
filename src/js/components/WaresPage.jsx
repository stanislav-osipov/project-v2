var WaresPage = React.createClass({	
	getDefaultProps: function () {
		function WaresItem(name, image, ref, price) {
			CatalogItem.call(this, name, image, ref)
			this.price = price
		}
		WaresItem.prototype = Object.create(CatalogItem.prototype)

		// wares[...] = []
		var wares = {volleyball: [], basketball: [], football: [], gym: [], cycling: [], athletic: []}
		wares.volleyball.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"))
		wares.volleyball.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"))
		
		wares.basketball.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"))
		wares.basketball.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"))
		wares.basketball.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"))
		
		wares.football.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"))
		wares.football.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"))
		wares.football.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"))
		
		wares.gym.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"))
		wares.gym.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"))
		
		wares.cycling.push(new WaresItem("Nice ball", "volleyball/ball_mik.jpg", "Nice Ball", "$555"))
		wares.cycling.push(new WaresItem("Beach ball", "volleyball/ball_beach.jpg", "Beach Ball", "$444"))
		
		wares.athletic.push(new WaresItem("Nice shoes", "volleyball/vol_shoes.jpg", "Nice Shoes", "$333"))
		wares.athletic.push(new WaresItem("Nice knee pads", "volleyball/knee_pad.jpg", "Nice Knee Pads", "$111"))
		wares.athletic.push(new WaresItem("Nice beach net", "volleyball/beach_net.jpg", "Nice Beach Net", "$1111"))
		
		var menuCategories = []
		menuCategories.push(new CatalogItem("Volleyball gear", "rugby.png", "volleyball"))
		menuCategories.push(new CatalogItem("Basketball gear", "basketball.png", "basketball"))
		menuCategories.push(new CatalogItem("Football gear", "soccer.png", "football"))
		menuCategories.push(new CatalogItem("Gym gear", "dumbbell.png", "gym"))
		menuCategories.push(new CatalogItem("Cycling gear", "bicycle.png", "cycling"))
		menuCategories.push(new CatalogItem("Athletic gear", "running.png", "athletic"))
		
		return {
		  wares: wares,
			menuCategories: menuCategories 
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
						<div className="page__menu">
							<Menu menuCategories={this.props.menuCategories} category={this.props.params.name}/>
						</div>
					
						<div className="page__content">
							<div className="content__view-option">
								<div className="view-option"> <a className="item__link" href="item_list_grid.html"> Grid View </a> </div>
							</div>
							<WaresList wares={this.props.wares[this.props.params.name]} category={this.props.params.name}/>
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