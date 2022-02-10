import PropTypes from 'prop-types';
const ImageGalleryItem = ({images,onModalOpen}) => {

 return (images.map((el) => 
   <li className="ImageGalleryItem" onClick={()=>{onModalOpen(el.largeImageURL)}} key={el.id}>
    <img className="ImageGalleryItem-image" src={el.webformatURL} alt="" />
  </li>)
)
}
ImageGalleryItem.propTypes = {
images: PropTypes.arrayOf(PropTypes.object)

}
export default ImageGalleryItem;
 