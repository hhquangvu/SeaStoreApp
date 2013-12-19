/*
 * GET home page.
 */

var ProductRepository = require('../services/ProductRepository.js');

exports.index = function(req, res) {
	console.log('### index');

	ProductRepository.getAll(function(results) {
		res.render('index.html', {
			data : results
		});
	});

};

exports.getProductByType = function(req, res) {
	console.log('### getProductByType');

	ProductRepository.fetchWithOption(req.params.type, function(results) {
		console.log(results);
		res.render('index.html', {
			data : results
		});
	});
};