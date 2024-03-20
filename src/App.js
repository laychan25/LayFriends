import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";

function App() {
  const [jogadores, setJogador] = useState([]);

  const aoNovoJogadorAdd = (jogador) => {
    console.log(jogador);
    setJogador([...jogadores, jogador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdd(jogador)}
      />
    </div>
  );
}

export default App;
