var $ = require('jQuery');

var React = require('react');
var Link = require('react-router').Link;

var CatalogItem = require('../app.jsx').CatalogItem;

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var WaresList = require('./WaresList.jsx');
var Menu = require('./Menu.jsx');

var AccountActions = require('../actions/AccountActions');

var apiPath = require('../app.jsx').apiPath;

var WaresPage = React.createClass({	
	getInitialState: function() {
    return {
      menuCategories: [],
			waresList: []
		};
  },
	
	componentWillMount: function() {
		AccountActions.update({needLogin: false});		
	},
	
	componentDidMount: function() {
		$.get(apiPath + "/menu", function(result) {
      if (this.isMounted()) {
        this.setState({
          menuCategories: result,
        });
      }
    }.bind(this));
		
		//same as Receive
		$.get(apiPath + "/wares/" + this.props.params.name, function(result) {
      if (this.isMounted()) {
        this.setState({
          waresList: result,
        });
      }
    }.bind(this));
	},
	
	componentWillReceiveProps: function(nextProps) {
		$.get(apiPath + "/wares/" + nextProps.params.name, function(result) {
      if (this.isMounted()) {
        this.setState({
          waresList: result,
        });
      }
    }.bind(this));
	},
	
	render: function() {
		return (
			<div className="page">
				<div className="page__header">
					<Header />
				</div>
				
				<div className="body-wrapper">	
					<div id="content-wrapper" className="content-wrapper">
						<div className="page__menu">
							<Menu menuCategories={this.state.menuCategories} category={this.props.params.name}/>
						</div>
					
						<div className="page__content">
							<div className="content__view-option">
								<div className="view-option"> <Link to={"/"} className="item__link"> Grid View </Link> </div>
							</div>
							<WaresList wares={this.state.waresList} category={this.props.params.name}/>
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

module.exports = WaresPage;