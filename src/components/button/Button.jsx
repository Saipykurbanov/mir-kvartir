import React from 'react';
import './css/button.css'


const Button = ({mode, callback, content}) => {
    return <button className={`main_button ${mode}`} onClick={callback}>{content}</button>
};

export default Button;