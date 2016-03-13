var mongoose = require('mongoose');

var schema = mongoose.Schema({
//nome,login,email,cpf e senha
	titulo: {
		type:String,
		required: true
	},
	pergunta: {
		type:String,
		required: true
	},
	alternativas: [String],
	duracao: {
		type: Number,
		required: true
	},
	imagem: {
		type:String
	},
	ordem: {
		type:Boolean,
		required: true
	},
	estado: {
		type: String,
		required: true
	}
});


mongoose.model('Enquete', schema);

