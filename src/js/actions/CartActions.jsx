var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/TodoConstants');

var CartActions = {

  create: function(item, count) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_CREATE,
      item: item,
			count: count
    });
  },

  update: function(id, count) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_UPDATE,
      id: id,
      count: count
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_DESTROY,
      id: id
    });
  }

};

module.exports = CartActions;