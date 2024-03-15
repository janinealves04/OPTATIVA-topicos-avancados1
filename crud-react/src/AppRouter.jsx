import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/home";
import NaoEncontrada from "./Paginas/NaoEncontrado";
import Base from "./Paginas/Base";
import Turma from "./Paginas/Turma";


function AppRouter () {
    return(
        <BrowserRouter>
             <Routes>
             <Route path="/" element={<Base/>}> 
                <Route index element={<Home/>}/>
                <Route path= "/turmas" element={<Turma/>}/>
                <Route path= "*" element={<NaoEncontrada/>}/>
            </Route>
             </Routes>
        
        
        </BrowserRouter>

    );
}

export default AppRouter;
