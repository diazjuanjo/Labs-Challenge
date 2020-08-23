import React, {useState} from 'react'

const SearchBar = ({ setSearch }) => {

  const [ query, setQuery ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(query);
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Labs - Challenge</a>
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
