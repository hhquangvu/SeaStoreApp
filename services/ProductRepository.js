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
	var query = new StackMob.Collection.Query();
	query.orderAsc('createddate');
	var products = new Products();
	products.query(query, {
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

	var query = new StackMob.Collection.Query();
	query.equals('type', option).orderAsc('createddate');
	var products = new Products();
	products.query(query, {
		success : function(results) {
			callback(results.toJSON());
		},
		error : function(error) {
			console.log(error);
		}
	});
};