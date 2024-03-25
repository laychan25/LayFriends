import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";


function App() {
  const times = [
    {
      nome: "Adc",
      corPrimaria: "#1E90FF",
      corSegundaria: "#F0FFF0",
    },
    {
      nome: "Sup",
      corPrimaria: "#DC143C",
      corSegundaria: "#FFC0CB",
    },
    {
      nome: "Mid",
      corPrimaria: "#8B008B",
      corSegundaria: "#DDA0DD",
    },
    {
      nome: "Jg",
      corPrimaria: "#3CB371",
      corSegundaria: "#90EE90",
    },
    {
      nome: "Top",
      corPrimaria: "#FFFF00",
      corSegundaria: "#FFFACD",
    },
  ];

  const [jogadores, setJogador] = useState([]);

  const aoNovoJogadorAdd = (jogador) => {
    setJogador([...jogadores, jogador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={(jogador) => aoNovoJogadorAdd(jogador)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          jogadores={jogadores.filter(jogador => jogador.rota === time.nome)}
        />
        
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
