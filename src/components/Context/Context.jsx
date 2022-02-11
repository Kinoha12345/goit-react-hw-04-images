import { createContext, useContext, useEffect, useState } from "react";

export const ImgContext = createContext()
const ImgProvider = ({ children }) => {
    const [value, setValue] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [largeImg, setLargeImg] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

      const data = {
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
      }
    return <ImgContext.Provider value={data}>{ children }</ImgContext.Provider>;
}

export default ImgProvider;