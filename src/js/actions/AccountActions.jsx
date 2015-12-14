var AppDispatcher = require('../dispatcher/AppDispatcher');
var AccountConstants = require('../constants/AccountConstants');

var AccountActions = {

  update: function(updates) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNT_STATE_UPDATE,
      updates: updates
    });
  }

};

module.exports = AccountActions;