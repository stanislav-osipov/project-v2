var AppDispatcher = require('../dispatcher/AppDispatcher');
var AccountConstants = require('../constants/AccountConstants');

var AccountActions = {

  update: function(updates) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNT_STATE_UPDATE,
      updates: updates
    });
  },
	
	autoLogin: function(id, token) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNT_AUTO_LOGIN,
      id: id,
      token: token
    });
  },
	
	login: function(mail, psw) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNT_LOGIN,
      mail: mail,
      psw: psw
    });
  },
	
	reg: function(mail, psw) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNT_REG,
      mail: mail,
      psw: psw
    });
  }
	
};

module.exports = AccountActions;