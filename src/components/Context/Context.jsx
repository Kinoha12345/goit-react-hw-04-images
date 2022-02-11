import { createContext, useState, useEffect } from "react";
import getPhotos from "../../services/services";
export const ImgContext = createContext();

const ImgProvider = ({ children }) => {
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


    return (<ImgContext.Provider value={{
      value,
      images,
      page,
      largeImg,
      isOpen,
      isLoading,
      OnbtnClick,
      onModalOpen,
      onTogleModal,
      onBtnSubmit
    }}>{ children }</ImgContext.Provider>)
}



export default ImgProvider;