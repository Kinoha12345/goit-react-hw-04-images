import { useContext } from "react";
import { ImgContext } from "../Context/Context";
import PropTypes from 'prop-types';
const Button = () => { 
const {OnbtnClick} = useContext(ImgContext)
    return ( <button type="Button" onClick={OnbtnClick} className={'Button'}>Load More</button> );
}

export default Button;  