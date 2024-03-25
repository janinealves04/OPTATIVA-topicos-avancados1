import { Button, Flex, Form, Input, Modal, Table } from "antd";
import Title from "antd/es/skeleton/Title";
import { useEffect, useState } from "react";
import TurmaService from "../../../services/TurmaService";
import TurmaModal from "./TurmaModal";




function TurmaTabela() {

    const [turmas, setTurmas] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);
    const buscarTurmas = async () => {
        try {
            const turmas = await TurmaService.listar();
            setTurmas(turmas);
        } catch (error) {
            console.log("Erro ao buscar turmas");
        }
    }

    useEffect(() => { buscarTurmas(); }, []);


    function editar(registro) {
        console.log(registro);
    }

    function excluir({id}) {
        Modal.confirm({
        title: "Tem certeza que deseja excluir a turma?",
        content: "Você vai apagar a turma definitivamente",
        okText: "Sim,excluir",
        okType: "danger",
        cancelText: "Cancelar",
        onOk() {
            TurmaService.excluir(id).then(()=>{
                const turmasAtualizado = turmas.filter(turma => turma.id != id);
                setTurmas (turmasAtualizado);
                console.log(`Turma com ${id}, excluida com sucesso`);
            }).catch(()=>{});
            
        },
        onCancel(){

        }

    }
        );
    }


    const columns = [
        { title: "Id", dataIndex: "id", key: "id" },
        { title: "Nome", dataIndex: "nome", key: "nome" },
        {
            title: "Ações", dataIndex: "acoes", key: "acoes", render: (_, record) =>
            (
                <div>
                    <Button>Editar onClick={() => { editar(record) }}</Button>
                    <Button>Excluir onClick={() => { excluir(record) }}</Button>
                </div>
            )
        }
    ];

    return (
        <>
            <h1>Turma</h1>
            <Flex justify="end" style={{ marginBottom: 10 }}>
                <Button type="primary" onClick={() => { setAbrirModal(true) }}>Novo</Button>
            </Flex>
            <Table dataSource={turmas} columns={columns} />

            <TurmaModal abrirModal={abrirModal}
                setAbrirModal={setAbrirModal}
                buscarTurmas={buscarTurmas} />
        </>


    );
}

export default TurmaTabela;