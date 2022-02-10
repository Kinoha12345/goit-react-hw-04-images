import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

const ImageGalleryList = ({images,onModalOpen}) => {
    return ( <ul className="ImageGallery">
    <ImageGalleryItem onModalOpen={onModalOpen} images={images}/>
  </ul> );
}
ImageGalleryList.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object)
}
export default ImageGalleryList;
