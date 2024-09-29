import React from 'react';
import NewCLients from './NewCLients';
import AllCLients from './all_clients/AllCLients';


const Clients = () => {

    return (
        <div className="profile_container">

            <div className="clients">

                <NewCLients />
                
                <AllCLients />

            </div>

        </div>
    );
};

export default Clients;