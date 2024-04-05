const BASE_URL_ALUNOS= "http://localhost:3000/alunos";

const AlunoService = {
    listar: async () => {
    try{
        
            const resposta = await fetch(BASE_URL_ALUNOS);
            if (!resposta.ok) {
                throw new Error("Erro ao alunos");
            }
            return await resposta.json();
        } catch(error) {
            throw error;
        }
    },
    
    salvar: async (aluno) => {
        try {
            const resposta = await fetch(BASE_URL_ALUNOS,
                {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(aluno)
                });
                if (!resposta.ok){
                    throw new Error("Erro na criação de aluno");
                }
                //return await resposta.json()//caso o endpoint retorne o objeto criado
        } catch (error) {
            throw error;
        }
    },
    excluir : async (id) => {
        try {
            const resposta = await fetch(`${BASE_URL_ALUNOS}/${id}`, 
            {method : "DELETE"}
            );
            if (!resposta.ok){
                throw new Error("Erro ao excluir alunos");
            }
        }catch(erro){
            throw erro;
        }
    }
}
export default AlunoService;