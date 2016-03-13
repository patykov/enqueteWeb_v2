angular.module('enqueteweb').controller('enqueteController', function($scope, $http, $location,cadastroDeEnquetes) {

	//criar enquete
	var count = 2;
	$scope.enquetes = [];
	$scope.novaEnquete = {};
	$scope.alternativas = ['',''];
	$scope.mensagemCadastroEnquete = '';
	//

$scope.registraEnquete = function(){
	//realizará o cadastro
	if($scope.formularioenquete.$valid){
		//não possui nenhum usuário cadastrado com esse cpf		
		cadastroDeEnquetes.cadastrar($scope.novaEnquete)
		.then(function(dados) {
				alert(dados.mensagem);
				if (dados.inclusao) $scope.novaEnquete = {};
			})
			.catch(function(erro) {
				console.log(erro);
				$scope.mensagemCadastroEnquete = 'Erro ao tentar cadastrar novo usuário. Por favor, tente novamente mais tarde.';
			});
		$scope.formularioenquete.$submitted = false;
		
	}
};


};