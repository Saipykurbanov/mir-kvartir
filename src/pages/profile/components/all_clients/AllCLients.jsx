import React from 'react';
import Client from './Client';
import GridHead from './GridHead';

const AllCLients = () => {
    return (
        <div className="all_clients">
            <div className="title_profile">переданные клиенты:</div>

            <div className="grid_wrapper">

                <div className="clients_grid">

                    <GridHead />

                    <Client />
                    <Client />
                    <Client />
                    
                </div>
            </div>
        </div>
    );
};

export default AllCLients;