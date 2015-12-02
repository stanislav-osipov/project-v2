var Gallery = React.createClass({
	getInitialState: function(){
		return { position: 0 };
	},
	
	handleRightClick: function () {
		this.setState(function(previousState, currentProps) {
			if (previousState.position == 2) {previousState.position = -1;}
			return {position: parseInt(previousState.position) + 1};
		});
	},
	
	handleLeftClick: function () {
		this.setState(function(previousState, currentProps) {
			if (previousState.position == 0) {previousState.position = 3;}
			return {position: previousState.position - 1};
		});
	},
	
	handleSmallImgClick: function (e) {
		this.setState(function(previousState, currentProps) {
			return {position: parseInt(e.target.alt)};
		});
	},
	
	componentWillMount: function(){
		var gal = [];
		
		gal.push("images/categories/" + this.props.image);
		gal.push("images/categories/volleyball/ball_mik.jpg");
		gal.push("images/categories/volleyball/vol_shoes.jpg");
		
		this.gal = gal
	},
	
	componentWillReceiveProps: function(){
		this.state = this.getInitialState();
	},
	
  render: function () {
    var self = this;

		this.componentWillMount();
		
    return (
			<div className="content__card-images">
				<img className="card-images__big-img" src={this.gal[this.state.position]} alt="Item_big"/>
				<div className="card-images__scroll-images-group">
					<img className="card-images__scroll" src="images/navigation/left.png" alt="left" onClick={this.handleLeftClick} />
					<img className={(this.state.position == 0) ? "card-images__small-img--now" : "card-images__small-img"} src={this.gal[0]} alt="0" onClick={this.handleSmallImgClick}/>
					<img className={(this.state.position == 1) ? "card-images__small-img--now" : "card-images__small-img"} src={this.gal[1]} alt="1" onClick={this.handleSmallImgClick}/>
					<img className={(this.state.position == 2) ? "card-images__small-img--now" : "card-images__small-img"} src={this.gal[2]} alt="2" onClick={this.handleSmallImgClick}/>
					<img className="card-images__scroll" src="images/navigation/right.png" alt={"right"} onClick={this.handleRightClick} />
				</div>
			</div>
    );
  }
})