import React from 'react';

const Burger = ({mode, callback}) => {
    return (
        <div className={`burger ${mode}`} onClick={(e) => callback(e)}>
            <span className="top"></span>
            <span className="center"></span>
            <span className="bottom"></span>
        </div>
    );
};

export default Burger;