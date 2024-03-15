const express = require("express");
const conexao = require("../util/db");

const router = express.Router();

function executarComandosSQL(sql, params, res, erroMsg){
    conexao.query(sql, params, (err, result) => {
        if (err){
            res.status(500).json({erro : erroMsg, 
                                 detalhes : err});
        }else{
            res.status(200).json(result);
        }
    })
}

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
