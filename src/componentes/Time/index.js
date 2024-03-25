import Jogador from '../colaborador'
import './time.css'

const Time = (props)=>{

    return(
          props.jogadores.length > 0 && <section className='time' style={{ backgroundColor: props.corSegundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                 {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nick} nick={jogador.nick} elo={jogador.elo}
             imagem={jogador.imagem} rota={jogador.rota}
            />)}
            </div>
           </section>
    )
}

export default Time