import React, {useState} from 'react'

const SearchBar = ({ setSearch, setOffset }) => {

  const [ query, setQuery ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(query)
    setOffset(1)
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h2 className="navbar-brand">Labs - Challenge</h2>
        <form 
          className="form-inline"
          onSubmit={ handleSubmit }
        >
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={ e => setQuery(e.target.value) }
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  )
}

export default SearchBar
