export const Divertidamente = (props: { nome: string; descricao:string; imagem: string; }) => (
    <header>
      <div className='header-wrapper'>
        <h3>{props.nome}</h3>
        <p>
          {props.descricao}
        </p>
        <img src="src/img/foto.png" alt="algo" />
      </div>
    </header>
  )