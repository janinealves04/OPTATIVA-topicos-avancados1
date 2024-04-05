const express = require("express");
const executarComandosSQL = require("../util/sql");
const router = express.Router();



router.get("/",(req, res) => {
    let sql = "select * from turma";
    executarComandosSQL(sql, [], res, 
        "Erro na consulta de turmas");
});

router.get("/:id",(req, res) => {
    let id = req.params.id;
    let sql = "select * from turma where id = ?";
    executarComandosSQL(sql, [id], res, 
        "Erro na consulta de uma turma");
});

router.post("/", (req, res) => {
    const {nome} = req.body;
    let sql = "insert into turma(nome) values (?)";
    executarComandosSQL(sql,[nome],res,"Erro na inserção de turmas");
});

module.exports = router;
