import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = () => {
  
  const rota = [
      "Top",
      " Jungler",
      "Mid", 
      "Adc",
       "Suporte"
      ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card de invocador</h2>
        <CampoTexto label="NickName" placeholder="Digite seu nick" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <CampoTexto label="Elo" placeholder="Informe seu elo" />
        <ListaSuspensa label="rota" itens={rota}/>
      </form>
    </section>
  )
}

export default Formulario 
