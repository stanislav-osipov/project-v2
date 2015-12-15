var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var assign = require('object-assign');

var AccountStore = require('../stores/AccountStore');

var CHANGE_EVENT = 'change';

var _cartItems = {};

function create(item, count, save) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _cartItems[id] = {
    id: id,
    item: item,
		count: count,
		save: save
  };
	
	if (save) {
		localStorage.cart = JSON.stringify(CartStore.getAll());
	}
}

function update(id, updates) {
  _cartItems[id] = assign({}, _cartItems[id], updates);
	localStorage.cart = JSON.stringify(_cartItems);
}

function destroy(id) {
  delete _cartItems[id];
	localStorage.cart = JSON.stringify(_cartItems);
}

var CartStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _cartItems;
  },
	
	setAll: function(savedCart) {
		_cartItems = savedCart;
		this.emitChange();
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

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case CartConstants.CART_ITEM_CREATE:
			create(action.item, action.count, action.save);
			CartStore.emitChange();
      break;

    case CartConstants.CART_ITEM_UPDATE:
			update(action.id, {count: action.count});
			CartStore.emitChange();
      break;

    case CartConstants.CART_ITEM_DESTROY:
      destroy(action.id);
      CartStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CartStore;