var Path = React.createClass({
  render: function () {
    var self = this;
		
    return (
      <div className="path">
				<Link to={"/wares/" + this.props.categoryName} className="path__link"> {this.props.categoryName} </Link> | {this.props.itemName}
			</div>
    );
  }
})