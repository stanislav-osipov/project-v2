var $ = require('jQuery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var DataConstants = require('../constants/DataConstants');
var assign = require('object-assign');

var CartStore = require('../stores/CartStore');

var apiPath = require('../app.jsx').apiPath;

var CHANGE_EVENT = 'change';

var categories = [];
var categoriesMenu = [];
var waresList = [];
var ware = {};

function getCategoriesAPI() {
	$.get(apiPath + "/wares", function(result) {
		categories = result;
		DataStore.emitChange();		
  });
};

function getCategoriesMenuAPI() {
	$.get(apiPath + "/menu", function(result) {
		categoriesMenu = result;
		DataStore.emitChangeMenu();		
  });
};

function getWaresListAPI(categoryName) {
	$.get(apiPath + "/wares/" + categoryName, function(result) {
		waresList = result;
		DataStore.emitChangeWaresList();		
  });
};

function getWareAPI(wareName) {
	$.get(apiPath + "/ware/" + wareName.split(" ").join(""), function(result) {
		ware = result;
		DataStore.emitChangeWare();		
  });
};

var DataStore = assign({}, EventEmitter.prototype, {
	getCategories: function() {
		return categories;
	},
	
	getCategoriesMenu: function() {
		return categoriesMenu;
	},
	
	getWaresList: function() {
		return waresList;
	},
	
	getWare: function() {
		return ware;
	},
	
	/*category list received*/
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
	
	/*menu received*/
	emitChangeMenu: function() {
    this.emit('changeMenu');
  },

  addChangeMenuListener: function(callback) {
    this.on('changeMenu', callback);
  },

  removeChangeMenuListener: function(callback) {
    this.removeListener('changeMenu', callback);
  },
	
	/*wares list received*/
	emitChangeWaresList: function() {
    this.emit('changeWaresList');
  },

  addChangeWaresListListener: function(callback) {
    this.on('changeWaresList', callback);
  },

  removeChangeWaresListListener: function(callback) {
    this.removeListener('changeWaresList', callback);
  },
	
	/*ware received*/
	emitChangeWare: function() {
    this.emit('changeWare');
  },

  addChangeWareListener: function(callback) {
    this.on('changeWare', callback);
  },

  removeChangeWareListener: function(callback) {
    this.removeListener('changeWare', callback);
  }
	
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case DataConstants.GET_CATEGORIES_LIST:
			getCategoriesAPI();
      break;
			
		case DataConstants.GET_CATEGORIES_MENU:
			getCategoriesMenuAPI();
			break;

		case DataConstants.GET_WARES_LIST:
			getWaresListAPI(action.category);
			break;
			
		case DataConstants.GET_WARE:
			getWareAPI(action.ware);
			break;
			
    default:
      // no op
  }
});

module.exports = DataStore;