var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CartActions = {

  create: function(item, count, save) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_CREATE,
      item: item,
			count: count,
			save: save
    });
  },

  update: function(id, count, save) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_UPDATE,
      id: id,
      count: count,
			save: save
    });
  },

  remove: function(id, save) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_ITEM_REMOVE,
      id: id,
			save: save
    });
  }

};

module.exports = CartActions;