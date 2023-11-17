const express = require('express');
var path = require('path');

const router = require('./routers/index');
const conexao = require("./infraestrutura/conexao")
const tabelas = require("./infraestrutura/tabela")

const app = express();
const port = 3000;

// const ExpressConfiguration = require('./routers/')

// ExpressConfiguration.configure(app)

router(app, express);
tabelas.init(conexao);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));


// const sql = 'SELECT usuarios FROM controle_livros';
// conexao.query(sql, (error, results) => {
//   if (error) throw error;

//   // Cria um array com os dados da coluna
//   const arrayDados = results.map(result => result.usuarios);

//   // Aqui você pode fazer a verificação do login com o array de dados

//   // Fecha a conexão com o banco de dados
//   conexao.end();
// });

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo");
});

