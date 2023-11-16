const express = require('express');
var path = require('path');

const router = require('./routers/index');
const conexao = require("./infraestrutura/conexao")
const tabelas = require("./infraestrutura/tabela")

const app = express();
const port = 3000;

router(app, express);
tabelas.init(conexao);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routers/index')); 
app.use('/auth', require('./routers/auth'));

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo");
});

