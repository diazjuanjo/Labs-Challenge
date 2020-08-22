import React, {useState} from 'react'

const SearchBar = ({ handleSubmit, handleChange }) => {

  

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
            onChange={ handleChange }
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  )
}

export default SearchBar
