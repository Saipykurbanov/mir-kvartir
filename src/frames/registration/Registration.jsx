import React from 'react';
import './css/registration.css'
import PartnerForm from './components/PartnerForm';
import Bottom from './components/Bottom';

const Registration = ({mode}) => {
    return (
        <div className={`${mode} registration`}>

            <PartnerForm />

            <Bottom />
        </div>
    );
};

export default Registration;