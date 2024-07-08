import {  useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";


function App() {
  const [times , setTimes] = useState([
    { nome: "Adc", corPrimaria: "#1E90FF", corSegundaria: "#6cc1d9" },
    { nome: "Sup", corPrimaria: "#DC143C", corSegundaria: "#FFC0CB" },
    { nome: "Mid", corPrimaria: "#8B008B", corSegundaria: "#DDA0DD" },
    { nome: "Jg", corPrimaria: "#3CB371", corSegundaria: "#90EE90" },
    { nome: "Top", corPrimaria: "#940000", corSegundaria: "#FA8072" },
  ]);

  const inicial = [

   {
    nick: 'LayBatatinha',
    elo: 'prata',
    rota:'Sup',
    imagem: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg'
   },
   {
    nick: 'ChequerVara',
    elo: 'bronze',
    rota: 'Top',
    imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg'
   },
   {
    nick: 'Deehkun',
    elo: 'platina',
    rota: 'Sup',
    imagem: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg'

   },
   {
    nick: 'aTochan',
    elo: 'ouro',
    rota: 'Adc',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gRKd03crDAs_OYcLgwVfv3TJwe12BCKSFA&s'
   },
   {
    nick: 'puloDoGato',
    elo: 'prata',
    rota: 'Jg',
    imagem: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg'
   },
   {
    nick: 'opala',
    elo: 'diamante',
    rota: 'Mid',
    imagem: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg'
   },
   {
    nick: 'cherquervara',
    elo: ' ouro',
    rota: 'Sup',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1ViuwEXs-I-QSAy1biPdiDVQ5Dh1MgyEpQ&s'
   }
  ]
  
const[ jogadores , setJogador] = useState(inicial)

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
