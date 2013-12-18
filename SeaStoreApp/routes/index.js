/*
 * GET home page.
 */

var ProductRepository = require('../services/ProductRepository.js');

exports.index = function(req, res) {

	ProductRepository.getAll(function(results) {
		res.render('index.html', {
			data : results
		});
	});

};

exports.getProductByType = function(req, res) {
};