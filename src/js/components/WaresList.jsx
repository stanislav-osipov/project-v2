var React = require('react');
var Link = require('react-router').Link;

var GridListItem = require('./GridListItem.jsx');

var WaresList = React.createClass({
  render: function () {
    var self = this;
	  
		var wares = [];
		
		if (this.props.view == "Grid") {
			wares = this.props.wares.map(function(ware, key) {
				return (
					<div className="item content__item" key={key + 2000}>
						<Link to={"/wares/" + ware.ref} className="item__link" >
							<img className="item__image" src={"images/categories/" + ware.image} alt={"Item" + (key - 2000)}/>
							<ul className="item__text"> 
								<li> {ware.name} </li>
								<li> ({ware.price}) </li>
							</ul>
						</Link> 
					</div>
				);
			});	
		} else {
			wares = this.props.wares.map(function(ware, key) {
				return (
			<GridListItem key={key} ware={ware} category={self.props.category}/>
				);
			});	
		};
		
    return (
      <div className="content">
        {wares}
      </div>
    );
  }
});

module.exports = WaresList;