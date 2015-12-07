var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Menu = React.createClass({
  render: function () {
    var self = this;
		
    var menuCategories = this.props.menuCategories.map(function(menuCategory, key) {
      return (
			  <li key={key + 1000}>  
					<Link to={"/wares/" + menuCategory.ref} className={(menuCategory.ref == self.props.category) ? "now" : "list__link"} >
						<img className="list__img" src={"images/navigation/" + menuCategory.image} alt={"Category" + (key - 1000)}/>
						{menuCategory.name}
					</Link>
					<hr className="menu__line"/>
        </li>
      );
    });
		
    return (
      <div className="menu">
				<input type="checkbox" id="nav-trigger" className="nav-trigger" />
				<ul className="menu__list">
					{menuCategories}
				</ul>
				<label htmlFor="nav-trigger"></label> 
      </div>
    );
  }
});

module.exports = Menu;