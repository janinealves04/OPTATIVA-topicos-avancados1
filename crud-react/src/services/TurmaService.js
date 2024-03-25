const BASE_URL_TURMAS = "http://localhost:3000/turmas";

const TurmaService = {
    listar: async () => {
    try{
        
            const resposta = await fetch(BASE_URL_TURMAS);
            if (!resposta.ok) {
                throw new Error("Erro ao buscar");
            }
            return await resposta.json();
        } catch(error) {
            throw error;
        }
    },
    
    salvar: async (turma) => {
        try {
            const resposta = await fetch(BASE_URL_TURMAS,
                {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(turma)
                });
                if (!resposta.ok){
                    throw new Error("Erro na criação de turma");
                }
                //return await resposta.json()//caso o endpoint retorne o objeto criado
        } catch (error) {
            throw error;
        }
    },
    excluir : async (id) => {
        try {
            const resposta = await fetch(`${BASE_URL_TURMAS}/${id}`, 
            {method : "DELETE"}
            );
            if (!resposta.ok){
                throw new Error("Erro ao excluir turmas");
            }
        }catch(erro){
            throw erro;
        }
    }
}
export default TurmaService;