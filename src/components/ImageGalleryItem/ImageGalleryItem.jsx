import { useContext } from "react";
import { ImgContext } from "../Context/Context";
const ImageGalleryItem = () => {
  const { images, onModalOpen } = useContext(ImgContext)
 return (images.map((el) => 
   <li className="ImageGalleryItem" onClick={()=>{onModalOpen(el.largeImageURL)}} key={el.id}>
    <img className="ImageGalleryItem-image" src={el.webformatURL} alt="" />
  </li>)
)
}



export default ImageGalleryItem;
 