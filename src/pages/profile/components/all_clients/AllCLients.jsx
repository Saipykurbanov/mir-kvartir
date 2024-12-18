import React, { useState } from 'react';
import Client from './Client';
import GridHead from './GridHead';
import ClientModal from './ClientModal';

const AllCLients = () => {

    return (
        <div className="all_clients">
            <div className="title_profile">клиенты в работе:</div>

            <div className="search">

                <div className="search_wraper">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4263 6C12.4263 8.20914 10.6354 10 8.4263 10C6.21716 10 4.4263 8.20914 4.4263 6C4.4263 3.79086 6.21716 2 8.4263 2C10.6354 2 12.4263 3.79086 12.4263 6ZM14.4263 6C14.4263 9.31371 11.74 12 8.4263 12C7.00105 12 5.69186 11.5031 4.66256 10.673L1.23629 14.0993L0 12.863L3.47421 9.38875C2.8131 8.4245 2.4263 7.25742 2.4263 6C2.4263 2.68629 5.11259 0 8.4263 0C11.74 0 14.4263 2.68629 14.4263 6Z" fill="#A2998F"/>
                    </svg>

                    <input type="text" placeholder='поиск'/>
                </div>

            </div>

            <div className="grid_wrapper">

                <div className="clients_grid">

                    <GridHead />

                    <Client />
                    <Client second={true} />
                    <Client />
                    <Client second={true}/>
                    <Client />
                    <Client second={true}/>
                    <Client />
                    <Client second={true} />
                    
                </div>
            </div>


        </div>
    );
};

export default AllCLients;