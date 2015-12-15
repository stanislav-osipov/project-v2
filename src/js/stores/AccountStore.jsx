var $ = require('jQuery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AccountConstants = require('../constants/AccountConstants');
var assign = require('object-assign');

var CartStore = require('../stores/CartStore');

var apiPath = require('../app.jsx').apiPath;

var CHANGE_EVENT = 'change';

var _accountState = {logged: false};

function update(updates) {
  _accountState = assign({}, _accountState, updates);
};

function autoLogin(id, token) {
	var request = $.post(apiPath + "/autoLogin", {"id": id, "token": token}, function(result, status) {
		if (status == "success") {
			update({"logged": true, "needLogin": false, "remember": true});
			CartStore.setAll(localStorage.cart ? JSON.parse(localStorage.cart) : {});
			AccountStore.emitChange();
		}
	});
};

var AccountStore = assign({}, EventEmitter.prototype, {

  getAcc: function() {
    return _accountState;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case AccountConstants.ACCOUNT_STATE_UPDATE:
			update(action.updates);
			/*AccountStore.emitChange();*/
      break;
			
		case AccountConstants.ACCOUNT_AUTO_LOGIN:
			autoLogin(action.id, action.token);
			break;

    default:
      // no op
  }
});

module.exports = AccountStore;