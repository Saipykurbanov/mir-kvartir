import React from 'react';

const GridHead = () => {
    return (
        <div className="clients_grid_item head">

            <div className="columns"><p>ФИО клиента</p></div>
            <div className="columns"><p>телефон клиента</p></div>
            <div className="columns"><p>статус сделки</p></div>
            <div className="columns last"><p>комментарий МК</p></div>

        </div>
    );
};

export default GridHead;