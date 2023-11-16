const livrosModel = require("../models/livrosModel")

class LivroController {
    buscar() {
        return livrosModel.listar();
    }

    criar(novoLivro) {
        return livrosModel.criar(novoLivro);
    }

    alterar(livroAtualizado, id) {
        return livrosModel.alterar(livroAtualizado, id);
    }
    apagar(id) {
        return livrosModel.apagar(id);
    }
}

module.exports = new LivroController();