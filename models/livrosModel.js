const conexao = require("../infraestrutura/conexao")

class LivrosModel {

    listar() {

        const sql = "SELECT * FROM livros"
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Deu erro ao listar");
                    reject(error);
                }
                console.log("Show man");
                resolve(resposta);
            }); 
        }); 
    }

    criar(novoLivro) {
        const sql = "INSERT INTO livros SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoLivro, (error, resposta) => {
                if(error) {
                    console.log("Deu erro ao listar...");
                    reject(error);
                }
                console.log("Showww foi");
                resolve(resposta);
            });
        }) 
    }

    alterar(livroAtualizado, id) {
        const sql = "UPDATE livros SET ? where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [livroAtualizado, id], (error, resposta) => {
                if(error) {
                    console.log("Deu erro ao atualizar...");
                    reject(error);
                }
                console.log("Showww foi");
                resolve(resposta);
            });
        }); 
    }
    apagar(id) {
        const sql = "DELETE FROM livros where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if(error) {
                    console.log("Deu erro ao deletar...");
                    reject(error);
                }
                console.log("Showww foi");
                resolve(resposta);
            });
        }); 
    }
}

module.exports = new LivrosModel();