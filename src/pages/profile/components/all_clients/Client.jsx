import React from 'react';
import useColor from '../../hooks/useColor';
import { NavLink } from 'react-router-dom';

const Client = ({second, openMenu}) => {

    const [color] = useColor('А')

    return (
        <NavLink to={'/client/1'} className={`clients_grid_item ${second ? 'second' : ''}`} onClick={openMenu}>
            <div className="avatar" style={{background: color}}>А</div>
            <div className="columns comment"><p>Кукуев Олег Кукуевич</p></div>
            <div className="columns comment"><p>+7 999 000 99 88</p></div>
            <div className="mob_columns">
                <div className="name">Александров О.К.</div>
                <div className="phone">+7 999 000 99 88</div>
            </div>
            <div className="columns status at_work"><p>в работе</p></div>
            <div className="columns comment"><p>некий комментарий, разворачивающийся при наведении</p></div>
        </NavLink>
    );
};

export default Client;