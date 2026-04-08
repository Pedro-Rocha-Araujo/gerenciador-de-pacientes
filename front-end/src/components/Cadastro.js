function Cadastro(props) {
    return (
        <section className='sec-cadastro'>
          <h2>Cadastro de pacientes</h2>
          <form 
            onSubmit={props.onId===null?props.onAdd:props.onSave}>
            <div className='campo-input'>
              <label>Nome</label>
              <input
              onChange={props.onChange} name="nome" required value={props.nome} type='text' />
            </div>
            <div className='campo-input'>
              <label>Idade</label>
              <input 
              onChange={props.onChange} name="idade" required value={props.idade} type='text' />
            </div>
            <div className='campo-input'>
              <label>Telefone</label>
              <input 
              onChange={props.onChange} name="telefone" required value={props.telefone} type='text' />
            </div>
            <button className="btn-adcionar" type='submit'
              >
              {props.onId===null?"Adcionar":"Salvar"}
            </button>
          </form>
        </section>
    )
}

export default Cadastro