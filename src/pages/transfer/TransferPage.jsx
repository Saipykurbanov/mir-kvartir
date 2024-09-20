import React, { useState } from 'react';
import TransferHeader from './components/TransferHeader';
import './css/transfer.css'
import TransferForm from './components/TransferForm';

const TransferPage = () => {

    return (
        <div className='transfer_page'>
            <TransferHeader />
            
            <TransferForm />

            <h2>Передать клиента</h2>
        </div>
    );
};

export default TransferPage;