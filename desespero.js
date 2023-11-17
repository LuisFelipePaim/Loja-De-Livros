const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'controle_livros'
});

// Conecta ao banco de dados
connection.connect();

// Executa a consulta SQL para obter os dados da coluna desejada
const sql = 'SELECT nome FROM usuarios';
connection.query(sql, (error, results) => {
    if (error) throw error;

    // Cria um array com os dados da coluna
    const arrayDados = results.map(result => result.nome);

    console.log(arrayDados);

    function validaUsuario(inputUsuario, usuario) {
        arrayDados.forEach(usuario => {
            if(usuario == inputUsuario) {
                redir
            }
        });

    }
    
    // Aqui você pode fazer a verificação do login com o array de dados

    // Fecha a conexão com o banco de dados
    connection.end();
});

