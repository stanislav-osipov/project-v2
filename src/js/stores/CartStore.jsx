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
		count: count
  };
	
	if (save) {
		localStorage.cart = JSON.stringify(_cartItems);
	};
}

function update(id, updates, save) {
  _cartItems[id] = assign({}, _cartItems[id], updates);
	
	if (save) {
		localStorage.cart = JSON.stringify(_cartItems);
	};
}

function remove(id, save) {
  delete _cartItems[id];
	
	if (save) {
		localStorage.cart = JSON.stringify(_cartItems);
	}
}

function getSummary(obj) {
	var price = 0;
	for (var id in obj) {
		price = price + obj[id].item.price * obj[id].count;
	}
			
	return {
		price:	price,
		count: Object.keys(obj).length
	}
}

var CartStore = assign({}, EventEmitter.prototype, {
	
	getItemsState: function() {
		return {
			allItems: _cartItems,
			summary: getSummary(_cartItems)
		};
	},

  getAll: function() {
    return _cartItems;
  },
	
	setAll: function(savedCart) {
		_cartItems = savedCart;
		this.emitChange();
	},
	
	Exist: function(item) {
		for (var key in _cartItems) {
			if (_cartItems[key].item.name == item.name) {
				return key;
			};
		};
		return 0;	
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
	
  switch(action.actionType) {
    case CartConstants.CART_ITEM_CREATE:
			create(action.item, action.count, action.save);
			CartStore.emitChange();
      break;

    case CartConstants.CART_ITEM_UPDATE:
			update(action.id, {count: action.count}, action.save);
			CartStore.emitChange();
      break;

    case CartConstants.CART_ITEM_REMOVE:
      remove(action.id, action.save);
      CartStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CartStore;