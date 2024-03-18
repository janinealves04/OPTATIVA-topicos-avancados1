import { Table } from "antd";
import { useEffect, useState } from "react";
import TurmaService from "../../../services/TurmaService";

function TurmaTabela() {

    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        const buscarTurmas = async () => {
            try {
                const turmas = await TurmaService.listar();
                setTurmas(turmas);
            } catch (error) {
                console.log("Erro ao buscar turmas");
            }
        }
        buscarTurmas();
    },[turmas]);

    const columns = [
        { title: "Id", dataIndex: "id", key: "id" },
        { title: "Nome", dataIndex: "nome", key: "nome" }
    ];

    return (
        <>
            <Table dataSource={turmas} columns={columns} />
        </>

    );
}

export default TurmaTabela;