var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Footer = React.createClass({
  render: function () {
    return (
      <div className="footer">
				<div className="footer__info-group">
					<p  className="footer__mail"> Stanislav_Osipov@epam.com, </p> 
					<p  className="footer__cell"> cell: +7 951 2064256 </p> 
				</div>
      </div>
    );
  }
})

module.exports = Footer;	