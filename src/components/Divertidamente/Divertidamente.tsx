import * as C from './style';

export const Divertidamente = (props: { nome: string; descricao:string; imagem: string; index: number;}) => (
    <header>
      <div className='header-wrapper'>
      <C.Container index={props.index}>
        <label>{props.nome} {/*item.done.toString()*/}</label>    
    </C.Container>
        
        <h3>{props.nome}</h3>
        <p>
          {props.descricao} Index: {props.index}
        </p>
        <img src={props.imagem} alt="algo" width="50px" />
      </div>
    </header>
  )