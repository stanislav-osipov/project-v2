var React = require('react');
var Link = require('react-router').Link;

var App = require('../app.jsx');

var Search = React.createClass({
	getInitialState: function(){
		return { searchString: '' };
	},
	
	handleChange: function(e){
		this.setState({searchString:e.target.value});
	},
	
  render: function () {
		var categories = this.props.items,
		searchString = this.state.searchString.trim().toLowerCase();

		if(searchString.length > 0){
			categories = categories.filter(function(l){
					return l.name.toLowerCase().match( searchString );
			});
		} else {categories = []}
		
		var maxLength = 6;
		if (categories.length > maxLength) {
			categories.splice(maxLength - 1, categories.length - maxLength)
		}
		
    return (
			<div>
      <div className="search">
				<input id="search__field" className="search__field" type="text" size="30" placeholder="Search" value={this.state.searchString} onChange={this.handleChange}/>
				<img className="search__image" src="images/navigation/search.png" alt="Search"/>
      </div>
						
			<div className="search-pop-up">
			{ categories.map(function(l, key){
					return <div className="search-pop-up__item" key={key + 100}> <Link to={l.url} className="item__link">{l.name}</Link> </div>
			}) }
			</div>

			</div>
    );
  }
})

module.exports = Search;
	