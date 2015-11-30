var CategoryList = React.createClass({
  render: function () {
    var self = this;

    var categories = this.props.categories.map(function(category, key) {
      return (
        <div className="item content__item" key={key}>
					<a className="item__link" href={category.ref}>
						<img className="item__image" src={"images/categories/" + category.image} alt={"Section" + key}/>
						<ul className="item__text"> 
							<li> {category.name} </li>
							<li> ({category.count}) </li>
						</ul>
					</a> 
        </div>
      );
    });

    return (
      <div className="content">
        {categories}
      </div>
    );
  }
})