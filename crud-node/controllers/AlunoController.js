const Router = express.Router();
const { Router } = require("express");
const executarComandosSQL = require("../util/sql");




router.get("/",(req, res) => {
    let sql = "select * from aluno";
    executarComandosSQL(sql, [], res, 
        "Erro na consulta de aluno");
});

router.get("/:id",(req, res) => {
    let id = req.params.id;
    let sql = "select * from aluno where id = ?";
    executarComandosSQL(sql, [id], res, 
        "Erro na consulta de uma aluno");
});

router.post("/", (req, res) => {
    const {nome, email, dataNascimento, turmaId} = req.body;
    let sql = "update aluno set nome = ?, email = ?, data_nascimento = ?, turma_id = ?, where id = ?";
    executarComandosSQL(sql,[nome, email, dataNascimento, turmaId],res,"Erro na inserção de aluno");
});

module.exports = router;
