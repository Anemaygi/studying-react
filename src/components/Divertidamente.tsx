import  foto  from "../img/foto.png";

export const Divertidamente = (props: { nome: string; descricao:string; imagem: string; }) => (
    <header>
      <div className='header-wrapper'>
        <h3>{props.nome}</h3>
        <p>
          {props.descricao} {props.imagem}
        </p>
        <img src={foto} alt="algo" />
      </div>
    </header>
  )