var $ = require('jQuery');

var React = require('react');
var Link = require('react-router').Link;

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;


var Navigation = React.createClass({	
	getInitialState: function() {
    return { showModal: false, check: true, showModalReg: false, mail: "", psw: "", mailReg: "", pswReg: "", enterResult: "", resColor: "black"};
  },

  close: function() {
    this.setState({ showModal: false });
  },
	
	closeReg: function() {
    this.setState({ showModalReg: false });
  },

  open: function() {
    this.setState({ showModal: true });
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
		$.post("http://localhost:3000/user/" + this.state.mailReg + "/" + this.state.pswReg, function(result, status) {
      if (this.isMounted()) {
				if (status == "success") {
					this.setState({enterResult: "Success!", resColor: "green"});
				} else {
					this.setState({enterResult: "This e-mail address is already in use!", resColor: "red"});
				}
				this.setState({psw: "", mail: ""});
				console.log(status);
      }
    }.bind(this));
	},
	
  render: function () {
    return (
      <div className="navigation">
				<Link to="/cart">
					<img className="navigation__image" src="images/navigation/cart.png" alt="cart"/>
				</Link>
				<img className="navigation__image" src="images/navigation/account.png" alt="acc" onClick={this.open}/>
				<Modal show={this.state.showModal} onHide={this.close} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title> Please Sign In </Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<input type="email" placeholder="Email address" className="reg_input" value={this.state.mail} onChange={this.handleMailChange}/>
						<br />
						<input type="password" placeholder="password" className="reg_input" value={this.state.psw} onChange={this.handlePswChange}/>
						<br />
						<input type="checkbox" name="remember" value={this.state.check} onChange={this.handleChange} defaultChecked={this.state.check}  /> <span className="reg_check">remember me</span>
          </Modal.Body>
          <Modal.Footer>
							<Button onClick={this.close}>Close</Button>
							<Button bsStyle="warning" onClick={this.openReg}>Register</Button>
							<Button bsStyle="primary">Sign In</Button>
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
							
							  <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover> <div style={{color: this.state.resColor}}> {this.state.enterResult} </div></Popover>}>
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
	