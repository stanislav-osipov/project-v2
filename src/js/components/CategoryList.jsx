var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var CategoryList = React.createClass({
  render: function () {
    var self = this;

    var categories = this.props.categories.map(function(category, key) {
      return (
        <div className="item content__item" key={key}>
					<Link to={"/wares/" + category.ref} className="item__link">
						<img className="item__image" src={"images/categories/" + category.image} alt={"Section" + key}/>
						<ul className="item__text"> 
							<li> {category.name} </li>
							<li> ({category.count}) </li>
						</ul>
					</Link> 
        </div>
      );
    });

    return (
      <div className="content">
        {categories}
      </div>
    );
  }
});

module.exports = CategoryList;