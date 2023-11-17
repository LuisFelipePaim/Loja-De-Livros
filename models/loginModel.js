const conexao = require("../infraestrutura/conexao");

class LoginModel {

    listar() {
        const sql = "SELECT * FROM usuarios"
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error,resposta) => {
                if(error) {
                    console.log("Deu erro ao listar");
                    reject(error);
                }
                console.log("Show man");
                resolve(resposta);
            })
        })        
    }

    criar(novoUsuario) {
        const sql = "INSERT INTO usuarios SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoUsuario, (error, resposta) => {
                if(error) {
                    console.log("Erro ao tentar adicionar novo usuário");
                    reject(error);
                }
                console.log("Novo usuário inserido");
                resolve(resposta);
            })
        })
    }

    alterar(usuarioAtualizado, id) {
        const sql = "UPDATE usuarios SET ? where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [usuarioAtualizado, id], (error,resposta) => {
                if(error) {
                    console.log("Erro ao atualizar usuário");
                    reject(error);
                }
                console.log("Usuário atualizado com sucesso")
                resolve(resposta)
            })
        })
    }
    deletar(id) {
        const sql = "DELETE FROM usuarios where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if(error) {
                    console.log("Erro ao deletar usuário");
                    reject(error);
                }
                console.log("Usuário excluido com sucesso");
                resolve(resposta);
            })
        })
    }

    listarUsuarios() {
        const sql = 'SELECT * FROM usuarios';
        
    }
}

module.exports = new LoginModel();