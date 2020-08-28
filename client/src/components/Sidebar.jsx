import React from 'react'

const Sidebar = ({ setSort, setCondition }) => {
  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ordenar por: 
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setSort('relevance')}
          >
            Más relevantes
          </button>
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setSort('price_asc')}
          >
            Menor precio
          </button>
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setSort('price_desc')}
          >
            Mayor precio
          </button>
        </div>
      </div>

      <div className="dropdown mt-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Condición
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setCondition(0)}
          >
            Todos
          </button>
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setCondition(2230581)}
          >
            Usados
          </button>
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setCondition(2230284)}
          >
            Nuevos
          </button>
          <button 
            className="dropdown-item" 
            type="button"
            onClick={e=>setCondition(2230582)}
          >
            Reacondicionados
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
