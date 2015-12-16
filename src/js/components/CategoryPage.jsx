var React = require('react');
var Link = require('react-router').Link;

var $ = require('jQuery');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var CategoryList = require('./CategoryList.jsx');

var AccountActions = require('../actions/AccountActions');
var DataActions = require('../actions/DataActions');
var DataStore = require('../stores/DataStore');

var CategoryPage = React.createClass({
	
	getInitialState: function() {
    return {
      categories: [],
    };
  },
	
	componentWillMount: function() {
		AccountActions.update({needLogin: false});
	},
	
	componentDidMount: function() {
		DataStore.addChangeListener(this._onDataReceive);
		DataActions.receiveCategoryList();
	},
	
	componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onDataReceive);
  },
	
	_onDataReceive: function() {
		this.setState({
			categories: DataStore.getCategories(),
		});
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