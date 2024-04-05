import { useEffect, useState } from "react";
import AlunoService from "../../../../services/AlunoService";

const  AlunoTabela = () => {
    Const [alunos, setAlunos] = useState([]);
    

useEffect(()=>{
    buscarAlunos();
}, []);

    const buscarAlunos = async ()=>{
        const dados = await AlunoService.listar();
        setAlunos(dados);
    } catch (error){
        console.error("Erro na buscar de alunos: ", error);
    }
    }

    const colunas = [
        {
            title : "id ",
            dataIndex : "id"
        },

        {
            title : "Nome",
            dataIndex : "nome"
        },

        {
            title : "id ",
            dataIndex : "id"
        }
    ]
    return (<h1> Alunos </h1>);

}

export default AlunoTabela;