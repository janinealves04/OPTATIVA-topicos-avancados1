import { Button, Form, Input, Modal } from "antd";
import TurmaService from "../../../services/TurmaService";


const TurmaModal = ({ abrirModal, setAbrirModal, buscarTurmas }) => {

    const [form] = Form.useForm();

    const salvarTurma = () => {
        form.validateFields().then().catch(
            async (values) => {
                await TurmaService.salvar(values);
                setAbrirModal(false);
                form.resetFields();
                buscarTurmas();
            }
        ).catch(erro => {
            console.log(erro);
        })
    }



    return (
        <>
            <Modal
                title="Turmas"
                open={abrirModal}
                onOk={() => { setAbrirModal(false) }}
                onCancel={() => { setAbrirModal(false) }} footer={(
                    <>
                        <Button onClick={() => { setAbrirModal(false) }}>Cancelar</Button>
                        <Button onClick={salvarTurma} type="primary">Cadastrar</Button>
                    </>
                )}>

                <Form form={form} layout="vertical" name="turmaForm">
                    <Form.Item
                        name="Nome"
                        label="Nome da turma"
                        rules={[{
                            required: true,
                            message: "Por favor, insira o nome da turma"
                        }]}
                    >
                        <Input placeholder="Digite o nome da turma" />
                    </Form.Item>
                </Form>

            </Modal>


        </>
    )
}


export default TurmaModal;