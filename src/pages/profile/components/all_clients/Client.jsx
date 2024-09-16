import React from 'react';

const Client = () => {
    return (
        <div className="clients_grid_item second">
            <div className="columns"><p>Кукуев Олег Кукуевич</p></div>
            <div className="columns"><p>+7 999 000 99 88</p></div>
            <div className="columns"><p>данные отправлены</p></div>
            <div className="columns comment"><p>некий комментарий, разворачивающийся при наведении</p></div>
        </div>
    );
};

export default Client;