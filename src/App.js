import { useState,useEffect } from "react";
import getPhotos from "./services/services";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGalleryList from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from './components/Loader/Loader';
import "./App.css";
import "./styles.css";
const App =() => {
  
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImg, setLargeImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    getPhotos(value, page).then((data) => {
      setImages( page === 1 ? data.hits : [...images, ...data.hits] );
      setIsLoading(false);
    });
      },[page,value]);

  const OnbtnClick = (e) => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const onModalOpen = (url) => {
    setLargeImg(url);
    onTogleModal();
  };

  const onTogleModal = () => {
    setIsOpen(!isOpen);
  };

  const onBtnSubmit = (value) => {
    setPage(1)
    setImages([])
    setValue(value);
  };
    return (
      <div className="App">
        <SearchBar onBtnSubmit={onBtnSubmit} />
        <ImageGalleryList onModalOpen={onModalOpen} images={images} />
        {isLoading ?<Loader/>:null }
        <Button OnbtnClick={OnbtnClick} />
        {isOpen ? <Modal url={largeImg} onTogleModal={onTogleModal} /> : null}
      </div>
    );
  
}

export default App;
