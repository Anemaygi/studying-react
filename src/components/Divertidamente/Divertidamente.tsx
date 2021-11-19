import * as C from './style';

export const Divertidamente = (props: { nome: string; descricao:string; imagem: string; index: number; color:string;}) => (
    <header>
      <div className='header-wrapper'>
      <C.Container index={props.index} color={props.color}>
      <div id="imagem"><img src={props.imagem} alt="algo" width="50px" /></div>
      <div id="conteudo">   
        <h3>{props.nome}</h3>
        <p>
          {props.descricao} 
        </p>
        </div>
      
      </C.Container>
      </div>
    </header>
  )