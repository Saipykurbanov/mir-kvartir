import React from 'react';

const Burger = ({isOpen, callback}) => {
    return (
        <div className={`burger ${isOpen ? 'cross' : 'burg'}`} onClick={(e) => callback(e)}>
            <span className="top"></span>
            <span className="center"></span>
            <span className="bottom"></span>
        </div>
    );
};

export default Burger;