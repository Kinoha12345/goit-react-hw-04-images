import { useState } from "react"
import PropTypes from 'prop-types';
const SearchBar = ({onBtnSubmit}) => {
   const[value,setValue]= useState('')
  
    return(
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={(e)=>{ e.preventDefault();onBtnSubmit(value)}}>
    <button type="submit" className="SearchForm-button" >
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      value={value}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={(event)=>{setValue(event.target.value)}}
    />
  </form>
</header>
    )
}
SearchBar.propTypes = {
  onBtnSubmit: PropTypes.func.isRequired
}
export default SearchBar
