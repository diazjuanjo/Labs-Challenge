import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import Catalogo from './components/Catalogo';



function App() {

  const [products, setProducts] = useState([])

  const [ query, setQuery ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    consultarAPI()
  }
  const handleChange = e => setQuery(e.target.value)

  const consultarAPI = async () => {
  
    const url = `http://localhost:4000/api/search?q=${query}`

    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
}

  return (
    <div className = "container">
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange}/>
      <Catalogo products = { products }/>
    </div>
  );
}

export default App;
