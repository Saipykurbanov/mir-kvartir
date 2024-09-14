import React from 'react';
import NewCLients from './NewCLients';

const Clients = () => {
    return (
        <div className="clients">

            <NewCLients />
            
            <div className="all_clients">
                <div className="title_profile">переданные клиенты:</div>
            </div>
        </div>
    );
};

export default Clients;