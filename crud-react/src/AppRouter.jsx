import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/home";


function AppRouter () {
    return(
        <BrowserRouter>
             <Routes>

                <Route path= "/" element={<Home/>}/>

             </Routes>
        
        
        </BrowserRouter>

    );
}

export default AppRouter;
