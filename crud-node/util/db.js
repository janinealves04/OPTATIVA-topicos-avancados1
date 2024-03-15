const mysql = require('mysql');

const senhaBanco = process.env.SENHA_BANCO || "";

const configConexao = {
    host : "localhost",
    user : "root",
    password : senhaBanco,
    database : "crud_react"
};

const conexao = mysql.createConnection(configConexao);

conexao.connect(err => {
    if (err){
        console.log("Erro na conexão com o banco.");
        process.exit(1);
    }
    console.log("Banco conectado!");
});

module.exports = conexao;




