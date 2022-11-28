import React from 'react';
import PropTypes from 'prop-types'

const Buttons = ({className, onClick, value}) => {
    return <button className= {className} onClick= {()=> onClick()} >{value}</button>;
}
 


Buttons.prototype = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

Buttons.defaultProps = {
    className: 'items-center w-8 h-8 justify-center rounded-md border border-transparent font-medium text-black cursor-pointer z-20'
}


export default Buttons;