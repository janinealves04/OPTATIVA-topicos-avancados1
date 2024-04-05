
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


module.exports = executarComandosSQL;
