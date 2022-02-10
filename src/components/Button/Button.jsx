import PropTypes from 'prop-types';
const Button = ({OnbtnClick}) => {

    return ( <button type="Button" onClick={OnbtnClick} className={'Button'}>Load More</button> );
}
Button.propTypes = {
    OnbtnClick: PropTypes.func.isRequired,
}
export default Button;  