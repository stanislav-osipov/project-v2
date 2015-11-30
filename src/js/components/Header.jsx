var Header = React.createClass({
  render: function () {		
    return (
      <div className="header">
				<img className="header__logo-img" src="images/navigation/logo.png" alt="Logo"/>

				<div className="header__logo-text">
					<i> Sports gear e-shop </i>
				</div>
								
				<div className="header__search"> 
					<Search items={categories}/>
				</div>
				
				<div className="header__navigation"> 
					<Navigation />
				</div>
      </div>
    );
  }
})
	