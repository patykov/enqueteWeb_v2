var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('Enquete');

	api.lista = function(req, res) {

		model.find()
		.then(function(enquetes) {
			res.json(enquetes);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});

	};

	api.buscaPorTitulo = function(req, res) {

		model.findOne({titulo: req.params.titulo})
		.then(function(usuario) {
			if (!enquete) throw new Error('Enquete não encontrada');
			res.json(enquete);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.adiciona = function(req, res) {

		model.create(req.body)
		.then(function(enquete) {
			res.json(enquete);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	return api;
};

