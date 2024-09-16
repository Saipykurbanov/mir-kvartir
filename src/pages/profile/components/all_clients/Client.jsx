import React from 'react';
import useColor from '../../hooks/useColor';

const Client = ({second}) => {

    const [color] = useColor('А')

    return (
        <div className={`clients_grid_item ${second ? 'second' : ''}`}>
            <div className="avatar" style={{background: color}}>А</div>
            <div className="columns"><p>Кукуев Олег Кукуевич</p></div>
            <div className="columns"><p>+7 999 000 99 88</p></div>
            <div className="columns status"><p>в работе</p></div>
            <div className="columns comment"><p>некий комментарий, разворачивающийся при наведении</p></div>
        </div>
    );
};

export default Client;