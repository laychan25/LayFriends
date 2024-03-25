import "./colaborador.css"

const Jogador = ({nick , elo, rota, imagem, corDeFundo}) =>{
    return(
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
                
                <img src={imagem} alt={nick}/>
            </div>
            <div className="rodape">
                <h4>{nick}</h4>
                <h5>{elo}</h5>
                <h5>{rota}</h5>

            </div>
        </div>


    )
}

export default Jogador