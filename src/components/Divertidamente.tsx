export const Divertidamente = (props: { nome: string; descricao:string; }) => (
    <header>
      <div className='header-wrapper'>
        <h3>{props.nome}</h3>
        <p>
          {props.descricao}
        </p>
      </div>
    </header>
  )