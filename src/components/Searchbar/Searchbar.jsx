import { useState, useContext } from "react";
import { ImgContext } from "../Context/Context";

const SearchBar = () => {
  const {onBtnSubmit} = useContext(ImgContext)
   const[value,setValue]= useState('')
  
    return(
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={(e)=>{ e.preventDefault(); onBtnSubmit(value)}}>
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

export default SearchBar
