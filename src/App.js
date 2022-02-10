import { useState,useEffect } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar/Searchbar";
import getPhotos from "./services/services";
import ImageGalleryList from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import "./styles.css";
import Modal from "./components/Modal/Modal";
import Loader from './components/Loader/Loader';
const App =() => {
  // state = {
  //   value: "",
  //   images: [],
  //   page: 1,
  //   largeImg: "",
  //   isOpen: false,
  //   isLoading: false,
  // };
  const[value,setValue] = useState('')
  const[images,setImages] = useState([])
  const [page,setPage] = useState(1)
  const [largeImg,setLargeImage] = useState('')
  const[isOpen,setIsOpen] = useState(false)
  const[isLoading,setIsloading] = useState(false)
  useEffect(()=>{
    // if (prev.page !== page || prev.value !== value) {
      getPhotos(value, page).then((data) => {
        setImages(page=== 1 ? data.hits : [...images,...data.hits] );
        setIsloading(false)
      });
  },[page,value]) 
 const OnbtnClick = (e) => {
  setPage(page + 1);
  setIsloading(true)
  };
 const onModalOpen = (url) => {
  setLargeImage(url);
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
