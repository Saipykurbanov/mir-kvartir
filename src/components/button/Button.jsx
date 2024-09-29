import React from 'react';
import './css/button.css'


const Button = ({mode, callback, content, type}) => {
    return <button type={type ? type : ''} className={`main_button ${mode}`} onClick={callback}>{content}</button>
};

export default Button;