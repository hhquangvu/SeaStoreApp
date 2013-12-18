/**
 * Product Repository
 */
require('stackmob');

StackMob.init({
	publicKey : "ca41e328-01c4-4671-b70d-414ad2ef250f",
	apiVersion : 0
});

/**
 * Create new model for StackMob
 */
var Product = StackMob.Model.extend({
	schemaName : 'products'
});

var Products = StackMob.Collection.extend({
	model : Product
});

/**
 * Get All product from database
 */
exports.getAll = function(callback) {
	var products = new Products();
	products.fetch({
		success : function(results) {
			callback(results.toJSON());
		},
		error : function(error) {
			console.log(error);
		}
	});
};

/**
 * Get product from database
 */
exports.fetchWithOption = function(option, callback) {
	var products = new Products({
		type : 1
	});
	
	products.fetch({
		success : function(results) {
			callback(results.toJSON());
		},
		error : function(error) {
			console.log(error);
		}
	});
};