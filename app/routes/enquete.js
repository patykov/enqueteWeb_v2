module.exports = function(app) {
	
	var api = app.api.enquete;

	app.route('/v2/enquetes')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v2/enquetes/:titulo')
		.get(api.buscaPorTitulo);
};