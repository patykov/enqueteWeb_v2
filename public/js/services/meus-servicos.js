angular.module('meusServicos', ['ngResource'])
	.factory('recursoUsuario', function($resource) {

		return $resource('/v1/usuarios/:cpf', null, {
			'get' :{
				method: 'GET'
			}
		});
	})
	.factory("cadastroDeUsuarios", function(recursoUsuario, $q) {
		var service = {};
		service.cadastrar = function(usuario) {
			return $q(function(resolve, reject) {

				recursoUsuario.save(usuario, function() {
					resolve({
						mensagem: 'Usuário ' + usuario.nome + ' cadastrado com sucesso!',
						inclusao: true
					});
				}, function(erro) {
					reject({
						mensagem: 'Não foi possível incluir o usuário: ' + usuario.nome
					});
				});
				
			});
		};
		return service;
    })

	.factory('recursoEnquete', function($resource) {

		return $resource('/v2/enquetes', null, {
			'get' :{
				method: 'GET'
			}
		});
	})

	.factory("cadastroDeEnquetes", function(recursoEnquete, $q) {
		var service = {};
		service.cadastrar = function(enquete) {
			return $q(function(resolve, reject) {

				recursoEnquete.save(enquete, function() {
					resolve({
						mensagem: 'Enquete ' + enquete.titulo + ' cadastrada com sucesso!',
						inclusao: true
					});
				}, function(erro) {
					reject({
						mensagem: 'Não foi possível incluir a enquete: ' + enquete.titulo
					});
				});				
			});
		};
		return service;
    });

