import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import Catalogo from './components/Catalogo';



function App() {

  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    const consultarApi = async () => {
        if(search === '' ) return;
        
        const url = `http://localhost:4000/api/search?q=${search}`
    
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
    }
    consultarApi();
  }, [search])
  
  return (
    <div className = "container">
      <SearchBar setSearch={setSearch}/>
      <Catalogo products = { products }/>
    </div>
  );
}

export default App;
