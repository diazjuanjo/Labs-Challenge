import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import Catalogo from './components/Catalogo';
import Sidebar from './components/Sidebar';



function App() {

  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ offset, setOffset ] = useState(1)
  const [ total, setTotal] = useState(1)
  const [ sort, setSort ] = useState('relevance')
  const [ condition, setCondition] = useState('0')

  useEffect(() => {
    const consultarApi = async () => {
        if(search === '' ) return
        
        const limit = 30
        const url = `http://localhost:4000/api/search?q=${search}&limit=${limit}&offset=${offset*limit}&sort=${sort}&ITEM_CONDITION=${condition}`
    
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
  }, [search, offset, sort, condition])

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
      <div className="row">
        <div className="col-lg-2">
          <Sidebar setSort={setSort} setCondition={setCondition}/>
        </div>
        <div className="col-lg-10">
          <Catalogo products = { products }/>
        </div>
      </div>
      
      <div className="row justify-content-center my-4">
          { (offset === 1) ? null : (
            <button 
                type="button"
                className="btn btn-info mr-1"
                onClick={previous}
            >&laquo; Anterior </button>
          ) }

          { (offset === total) ? null : (
            <button 
              type="button"
              className="btn btn-info"
              onClick={next}
            >Siguiente &raquo;</button>
          ) }
      </div>
    </div>
  );
}

export default App
