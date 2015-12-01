var Path = React.createClass({
  render: function () {
    var self = this;
		
    return (
      <div className="path">
				<Link to="/" className="path__link"> {this.props.category} </Link> | {this.props.itemName}
			</div>
    );
  }
})