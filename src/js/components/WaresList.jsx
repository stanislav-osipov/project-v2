var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var WaresList = React.createClass({
  render: function () {
    var self = this;
	  
    var wares = this.props.wares.map(function(ware, key) {
      return (
        <div className="item content__item" key={key + 2000}>
					<Link to={"/wares/" + self.props.category + "/" + ware.ref} className="item__link" >
						<img className="item__image" src={"images/categories/" + ware.image} alt={"Item" + (key - 2000)}/>
						<ul className="item__text"> 
							<li> {ware.name} </li>
							<li> ({ware.price}) </li>
						</ul>
					</Link> 
        </div>
      );
    });
		
    return (
      <div className="content">
        {wares}
      </div>
    );
  }
});

module.exports = WaresList;