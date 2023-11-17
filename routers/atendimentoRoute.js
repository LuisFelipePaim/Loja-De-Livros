const {Router} = require("express");
const router = Router();
const livrosController = require("../controllers/livrosController");
const loginController = require("../controllers/loginController");
const { listar } = require("../models/livrosModel");
const { listarUsuarios } = require("../models/loginModel");
const { conexao } = require("../infraestrutura/tabela");

router.get('/', (req, res) => {
    res.render("../views/login")
})

router.post('/', (req,res) => {
    res.render('../')
})

router.get('/paginaInicial', (req,res) => {
    res.render('../views/index')
})


router.get('/register', (req, res) => {
    

    // const listarUsuarios = loginController.buscar();
    // listarUsuarios
    // .then(usuarios => res.status(200).json(usuarios))
    // .catch(error => res.status(400).json(error.message))
    
    res.render('../views/register')
    
})


router.get('/produto', (req, res) => {
    res.render('../views/produto')
})

router.get('/livros', (req, res) => {

    const listaLivros = livrosController.buscar();
    listaLivros
        .then(livros => res.status(200).json(livros))
        .catch(error => res.status(400).json(error.message));
});

router.post('/livros', (req, res) => {
    const novoLivro = req.body;
    const livros = livrosController.criar(novoLivro);
    livros
        .then(livroCriado => res.status(201).json(livroCriado))
        .catch(error => res.status(400).json(error.message));
    
})


router.put('/livros/:id', (req, res) => {
    const { id } = req.params;
    const livroAtualizado = req.body;
    const livro = livrosController.alterar(livroAtualizado, id);
    livro
        .then((resultLivroAtualizado) => res.status(200).json(resultLivroAtualizado))
        .catch((error) => res.status(400).json(error.message))
    
})


router.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const livro = livrosController.apagar(id);
    livro
        .then((resultLivroDeletado) => res.status(200).json(resultLivroDeletado))
        .catch((error) => res.status(400).json(error.message))
})

router.get('/meiosPagamento', (req, res) => {
    res.render('../views/meiosPagamento')
})
module.exports = router;
