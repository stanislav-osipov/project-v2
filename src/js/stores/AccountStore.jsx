var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AccountConstants = require('../constants/AccountConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _accountState = {logged: false};

function update(updates) {
  _accountState = assign({}, _accountState, updates);
}

var AccountStore = assign({}, EventEmitter.prototype, {

  getAccountState: function() {
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
			AccountStore.emitChange();
      break;


    default:
      // no op
  }
});

module.exports = AccountStore;