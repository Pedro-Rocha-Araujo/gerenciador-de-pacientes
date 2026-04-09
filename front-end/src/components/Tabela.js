import { useEffect } from "react"

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
                {props.lista.map((paciente, index)=>{
                  return(
                    <tr key={index} id={index}>
                      <td data-label="Nome:">{paciente.nome}</td>
                      <td data-label="Idade">{paciente.idade}</td>
                      <td data-label="Telefone">{paciente.telefone}</td>
                      <td data-label="Opções:" className="opcoes">
                        <button className="btn-editar"
                          onClick={()=>props.onEdit(paciente._id)}>
                          Editar
                        </button> 
                        <button className="btn-deletar" 
                          onClick={()=>props.onDelete(paciente._id)}>
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