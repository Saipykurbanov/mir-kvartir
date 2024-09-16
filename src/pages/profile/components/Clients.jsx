import React from 'react';
import NewCLients from './NewCLients';
import AllCLients from './all_clients/AllCLients';


const Clients = () => {

    return (
        <div className="clients">

            <NewCLients />
            
            <AllCLients />

        </div>
    );
};

export default Clients;