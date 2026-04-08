function Tabela(props) {
    return (
        <section className='sec-cadastrados'>
          <h2>Pacientes Cadastrados</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Telefone</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {props.lista.map((_,i)=>{
                  return(
                    <tr key={i} id={i}>
                      <td data-label="Nome:">{_.nome}</td>
                      <td data-label="Idade">{_.idade}</td>
                      <td data-label="Telefone">{_.telefone}</td>
                      <td data-label="Opções:" className="opcoes">
                        <button className="btn-editar"
                          onClick={()=>props.onEdit(i)}>
                          Editar
                        </button> 
                        <button className="btn-deletar" onClick={()=>props.onDelete(i)}>
                          Deletar
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
    )
}

export default Tabela