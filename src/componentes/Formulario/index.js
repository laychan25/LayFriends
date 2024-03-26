import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nick, setNick] = useState("");
  const [elo, setElo] = useState("");
  const [imagem, setIMagem] = useState("");

  const [rota, setRota] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nick,
      rota,
      imagem,
      elo,
    });
    setNick('')
    setIMagem('')
    setElo('')
    setRota('')
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card de invocador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite seu nick"
          value={nick}
          aoAlterado={(valor) => setNick(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem do seu main"
          value={imagem}
          aoAlterado={(valor) => setIMagem(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Elo"
          placeholder="Informe seu elo"
          value={elo}
          aoAlterado={(valor) => setElo(valor)}
        />
        <ListaSuspensa
          label="Rota"
          itens={props.times}
          valor={rota}
          aoAlterado={(valor) => setRota(valor)}
        />
        <Botao>Crir Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
