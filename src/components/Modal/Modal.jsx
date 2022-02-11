import { useEffect, useContext } from "react";
import { ImgContext } from "../Context/Context";


const Modal = () => {
  const {largeImg,onTogleModal} = useContext(ImgContext)
 const oncloseModal = (e)=>{
    //  console.log(e.target);
    console.log(e.key === 'Escape');
     if(e.target.className === 'Overlay'|| e.key === 'Escape')
        onTogleModal() 
    }
   useEffect(()=>{window.addEventListener('keydown',oncloseModal); return()=> window.removeEventListener('keydown',oncloseModal)},[])
    
    return ( <div className="Overlay" onClick={oncloseModal}>
    <div className="Modal">
      <img src={largeImg} alt="" />
    </div>
  </div> );
}

export default Modal;