const loginModel = require('../models/loginModel');

class LoginController {
    buscar() {
        return loginModel.listar();
    }

    criar(novoUsuario) {
        return loginModel.criar(novoUsuario);
    }

    alterar(usuarioAtualizado, id) {
        return loginModel.alterar(usuarioAtualizado, id);
    }

    apagar(id) {
        return loginModel.apagar(id)
    }
}

module.exports = new LoginController();

exports.register = (req, res) => {
    console.log(req.body);
    res.send("Form submitted")
}