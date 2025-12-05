const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       // ou IP do servidor MySQL
  user: 'root',             // seu usuário do MySQL
  password: '2312',         // sua senha do MySQL
  database: 'app_dicas'     // nome do banco
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

module.exports = connection;
