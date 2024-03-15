import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("Valor vazio");
  
  function clicar(){
    setNome("Novo Valor")
  }
  return(
    <>
      <h1 className="Titulo">Buscar Cep</h1>
      <input type="text" placeholder="Digite o cep"/>
      <input type= "button" value = "ok" onClick={clicar}/>
      <h2>{nome}</h2>
    </>
  );
  
}

export default App;