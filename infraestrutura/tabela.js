class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaLivros();
    }

    criarTabelaLivros() {
        const sql = `
            CREATE TABLE IF NOT EXISTS livros (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            preco_normal VARCHAR(10),
            preco_desconto VARCHAR(10),
            descricao VARCHAR(1000),
            quantidade VARCHAR(1000)
        );
        `; 
        this.conexao.query(sql, (error) =>{
            if(error) {
                console.log("Erro ao criar tabela");
                console.log(error.message);
                return;
            }
        }
        )
        ;
    }
}

module.exports = new Tabelas();