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


const novoUsuario = { nome: 'Exemplo', email: 'exemplo@email.com' };
async function criarUsuario(usuario) {
    console.log(usuario)
    connection.query('INSERT INTO usuarios SET ?', usuario, (error, results, fields) => {
        if (error) { 
            throw error 
        };
        console.log('Novo usuário inserido com ID: ', results.insertId);
    });
    connection.end();
}

// Função para obter todos os usuários da tabela 'usuarios'
const obterTodosUsuarios = async () => {
    try {  
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuarios', (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    } catch (error) {
      throw error;
    }
};

const loginUsuarios = async (email, senha) => {
    try {  
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuarios where email =? and senha=?', [email, senha], (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    } catch (error) {
      throw error;
    }
};

async function acessar(email, senha) {
    const usuario = await loginUsuarios(email, senha)
    return usuario && usuario.length > 0
}

async function obterUsuarios() { 
    return await obterTodosUsuarios()
}


// Executa a consulta SQL para obter os dados da coluna desejada
connection.del
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
    //connection.end();
});


module.exports = {criarUsuario, obterUsuarios, acessar}