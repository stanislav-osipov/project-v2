var AppDispatcher = require('../dispatcher/AppDispatcher');
var DataConstants = require('../constants/DataConstants');

var DataActions = {

  receiveCategoryList: function() {
    AppDispatcher.dispatch({
      actionType: DataConstants.GET_CATEGORIES_LIST
    });
  },
	
  receiveMenu: function() {
    AppDispatcher.dispatch({
      actionType: DataConstants.GET_CATEGORIES_MENU
    });
  },
	
	receiveWaresList: function(category) {
    AppDispatcher.dispatch({
      actionType: DataConstants.GET_WARES_LIST,
			category: category
    });
  },
	
	receiveWare: function(ware) {
    AppDispatcher.dispatch({
      actionType: DataConstants.GET_WARE,
			ware: ware
    });
  }
	
};

module.exports = DataActions;