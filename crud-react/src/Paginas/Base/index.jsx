import {Layout, Menu} from "antd";
import { Outlet, Link } from "react-router-dom";


const {Header, Sider, Content} = Layout;


function Base (){
     return (
        <Layout>
            <Header>
                {/* Conteudo do  cabeçalho*/}
            </Header>
            <Layout>
                <Sider>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key= "home">
                            <Link to="/">Home</Link>
                        </Menu.Item>

                        <Menu.Item key= "turmas">
                            <Link to="/turmas">Turmas</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{minHeight:"100vh", margin: "10px"}}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>


     );
}
export default Base;