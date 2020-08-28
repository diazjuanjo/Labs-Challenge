import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import Catalogo from './components/Catalogo';



function App() {

  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ offset, setOffset ] = useState(1)
  const [ total, setTotal] = useState(1)

  useEffect(() => {
    const consultarApi = async () => {
        if(search === '' ) return
        
        const limit = 30
        const url = `http://localhost:4000/api/search?q=${search}&limit=${limit}&offset=${offset}&sort=relevance&ITEM_CONDITION=0`
    
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data.results)

        const calcTotalPage = Math.ceil(data.total / limit )
        setTotal(calcTotalPage)

        // Mover la pantalla hacia arriba
        const up = document.querySelector('.up');
        up.scrollIntoView({ behavior: 'smooth' })
    }
    consultarApi()
  }, [search, offset])

  const previous = () => {
    const newOffset = offset - 1

    if(newOffset === 0 ) return

    setOffset(newOffset)
  }

  const next = () => {
    const newOffset = offset + 1

    if(newOffset > total ) return

    setOffset(newOffset)
  }
  
  return (
    <div className = "container up">
      <SearchBar setSearch={setSearch} setOffset={setOffset}/>
      <Catalogo products = { products }/>
      
      <div className="row justify-content-center">
          { (offset === 1) ? null : (
            <button 
                type="button"
                className="bbtn btn-info mr-1"
                onClick={previous}
            >&laquo; Anterior </button>
          ) }

          { (offset === total) ? null : (
            <button 
              type="button"
              className="bbtn btn-info"
              onClick={next}
            >Siguiente &raquo;</button>
          ) }
      </div>
    </div>
  );
}

export default App
