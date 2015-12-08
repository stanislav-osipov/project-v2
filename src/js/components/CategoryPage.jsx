var React = require('react');
var Link = require('react-router').Link;

var $ = require('jQuery');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CategoryList = require('./CategoryList.jsx');

var CategoryPage = React.createClass({
	
	getInitialState: function() {
    return {
      categories: [],
    };
  },
	
	componentDidMount: function() {
		$.get("http://localhost:3000/wares", function(result) {
      if (this.isMounted()) {
        this.setState({
          categories: result,
        });
      }
    }.bind(this));
	},
	
	render: function () {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__content">
							<CategoryList categories={this.state.categories}/>
						</div>
					</div>
					
					<div className="page__footer">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CategoryPage;