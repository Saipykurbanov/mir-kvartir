import React from 'react';
import useColor from '../../hooks/useColor';

const Client = ({second}) => {

    const [color] = useColor('А')

    return (
        <div className={`clients_grid_item ${second ? 'second' : ''}`}>
            <div className="avatar" style={{background: color}}>А</div>
            <div className="columns comment"><p>Кукуев Олег Кукуевич</p></div>
            <div className="columns comment"><p>+7 999 000 99 88</p></div>
            <div className="mob_columns">
                <div className="name">Александров О.К.</div>
                <div className="phone">+7 999 000 99 88</div>
            </div>
            <div className="columns status at_work"><p>в работе</p></div>
            <div className="columns comment"><p>некий комментарий, разворачивающийся при наведении</p></div>
        </div>
    );
};

export default Client;