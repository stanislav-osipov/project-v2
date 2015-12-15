var $ = require('jQuery');

var React = require('react');
var Link = require('react-router').Link;

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;

var AccountActions = require('../actions/AccountActions');
var AccountStore = require('../stores/AccountStore');
var CartStore = require('../stores/CartStore');

var apiPath = require('../app.jsx').apiPath;

function getSummary(obj) {
	var price = 0;
	for (var id in obj) {
		price = price + obj[id].item.price * obj[id].count;
	}
			
	return {
		price:	price,
		count: Object.keys(obj).length
	}
};

function getItemsState() {
	return {
		allItems: CartStore.getAll(),
		summary: getSummary(CartStore.getAll())
	};
}; //move logic to store

var Navigation = React.createClass({	
	getInitialState: function() {
    return { showModal: false, 
			check: true, 
			showModalReg: false, 
			mail: "", 
			psw: "", 
			mailReg: "", 
			pswReg: "", 
			enterResult: "",
			enterSignResult: "",
			resColor: "black",
			resColorSign: "black",
			count: getItemsState().summary.count
			};
  },
	
	closeClick: function() {
		if (!AccountStore.getAcc().logged && AccountStore.getAcc().needLogin) {
			this.close();
			window.location.href = "#/";			
		}	else {
			this.close();
		}
  },

  close: function() {
		if (!AccountStore.getAcc().needLogin) {
			this.setState({ showModal: false });			
		}
  },
	
	closeReg: function() {
    this.setState({ showModalReg: false });
  },

  open: function() {
		if (AccountStore.getAcc().logged) {
			AccountActions.update({logged: false, remember: false});
			CartStore.setAll({});
			localStorage.cart = "";
			localStorage.token = "";
		} else {
			this.setState({ showModal: true });			
		}
  },
	
	openReg: function() {
    this.setState({ showModalReg: true });
  },

	handleChange: function(e){
		this.setState({check: e.target.checked});
	},
	
	handleMailRegChange: function(e){
		this.setState({mailReg: e.target.value});
	},
	
	handlePswRegChange: function(e){
		this.setState({pswReg: e.target.value});
	},
	
	handleMailChange: function(e){
		this.setState({mail: e.target.value});
	},
	
	handlePswChange: function(e){
		this.setState({psw: e.target.value});
	},

	onRegClick: function() {
		if (!!this.state.mailReg && !!this.state.pswReg){
			$.post(apiPath + "/users", {mail: this.state.mailReg, psw: this.state.pswReg}, function(result, status) {
				if (this.isMounted()) {
					if (status == "success") {
						var self = this;
						this.setState({enterResult: "Registration passed successfully!", resColor: "green"});
						this.setState({psw: this.state.pswReg, mail: this.state.mailReg});
						this.setState({pswReg: "", mailReg: ""});
						window.setTimeout(function(){self.closeReg()}, 1500);					
					} else {
						this.setState({enterResult: "This e-mail address is already in use!", resColor: "red"});
						this.setState({pswReg: "", mailReg: ""});					
					}
					//console.log(result.id);
				}
			}.bind(this));
		} else {
			this.setState({enterResult: "Fields requiered", resColor: "red"});
		}
	},
	
	onSignClick: function() {
		if (!!this.state.mail && !!this.state.psw){
			$.post(apiPath + "/loginUsers/" + this.state.mail, {psw: this.state.psw}, function(result, status) {
				if (this.isMounted()) {
					if (status == "success") {
						var self = this;
						this.setState({enterSignResult: "Signing in successfully!", resColorSign: "green"});
						AccountActions.update({logged: true, id: result.id});
						AccountActions.update({needLogin: false});
						localStorage.cart = JSON.stringify(CartStore.getAll());
						if (this.state.check){
							localStorage.setItem('token', result.token);
							localStorage.setItem('id', result.id);
							AccountActions.update({remember: true});
						} else {
							localStorage.removeItem('token');
						}
						window.setTimeout(function(){self.close()}, 1500);
						this.setState({psw: "", mail: ""});
					} else {
						this.setState({enterSignResult: "Wrong password or email", resColorSign: "red"});
						this.setState({psw: ""});		
					}
				}
			}.bind(this));
		} else {
			this.setState({enterSignResult: "Fields requiered", resColorSign: "red"});
		};
	},
	
	componentDidMount: function() {
		if (AccountStore.getAcc().needLogin) {
			this.setState({ showModal: true });
		}
		CartStore.addChangeListener(this._onChange);
		AccountStore.addChangeListener(this._onChangeAccount);
	},
	
	componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
		AccountStore.removeChangeListener(this._onChangeAccount);
  },
		
	_onChange: function() {
		if (this.isMounted()) {
			this.setState({count: getItemsState().summary.count});
		}
  },
	
	_onChangeAccount: function() {
    if (!AccountStore.getAcc().needLogin) {
			if (this.isMounted()) {
				this.setState({ showModal: false });				
			}
		}
  },
	
  render: function () {
    return (
      <div className="navigation">
				<div className="navigation__image--interactive">
					<img className="navigation__image" src="images/navigation/account.png" alt="acc" onClick={this.open}/>
					<img className="navigation__status" src={AccountStore.getAcc().logged ? "images/navigation/login.png" : "images/navigation/nologin.png"} alt="login status"/>
				</div>
			
				<Link to="/cart">
					<div className="navigation__image--interactive">
						<img className="navigation__image" src="images/navigation/cart.png" alt="cart"/>
						<div className="navigation__cart-count"> {this.state.count} </div>
					</div>
				</Link>
				
				<Modal show={this.state.showModal} onHide={this.close} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title> Please Sign In </Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<input type="email" placeholder="Email address" className="reg_input" value={this.state.mail} onChange={this.handleMailChange}/>
						<br />
						<input type="password" placeholder="password" className="reg_input" value={this.state.psw} onChange={this.handlePswChange}/>
						<br />
						<input type="checkbox" name="remember" value={this.state.check} onChange={this.handleChange} defaultChecked={this.state.check}  /> 
						<span className="reg_check">remember me</span>
          </Modal.Body>
          <Modal.Footer>
						<ButtonToolbar>
							<Button onClick={this.closeClick}>Close</Button>
							<Button bsStyle="warning" onClick={this.openReg}>Register</Button>
							
							<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover id="SignInNotify"> 
							<div style={{color: this.state.resColorSign}}> {this.state.enterSignResult} </div></Popover>}>
								<Button bsStyle="primary" onClick={this.onSignClick}>Sign In</Button>
							</OverlayTrigger>
						</ButtonToolbar>
          </Modal.Footer>
        </Modal>
				
				<Modal show={this.state.showModalReg} onHide={this.closeReg} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title> Register </Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<input type="email" placeholder="Email address" className="reg_input" value={this.state.mailReg} onChange={this.handleMailRegChange}/>
						<br />
						<input type="password" placeholder="password" className="reg_input" value={this.state.pswReg} onChange={this.handlePswRegChange}/>
          </Modal.Body>
          <Modal.Footer>
						<ButtonToolbar>
							<Button onClick={this.closeReg}>Close</Button>
						
							<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover id="RegisterNotify"> 
							<div style={{color: this.state.resColor}}> {this.state.enterResult} </div></Popover>}>
								<Button bsStyle="primary" onClick={this.onRegClick}>Register</Button>
							</OverlayTrigger>
						</ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Navigation;
	