import { useState, useEffect, useContext } from "react";
// import getPhotos from "./services/services";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGalleryList from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from './components/Loader/Loader';
import {ImgContext} from './components/Context/Context'
import "./App.css";
import "./styles.css";
const App = () => {
  
  const {isLoading, isOpen} = useContext(ImgContext);
    return (
      <div className="App">
        <SearchBar  />
        <ImageGalleryList />
        {isLoading ?<Loader/>:null }
        <Button />
        {isOpen ? <Modal /> : null}
      </div>
    );
  
}

export default App;
