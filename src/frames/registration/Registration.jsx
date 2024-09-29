import React from 'react';
import './css/registration.css'
import PartnerForm from './components/PartnerForm';
import Bottom from './components/Bottom';
import BackButton from './components/BackButton';

const Registration = ({mode}) => {
    return (
        <div className={`${mode} registration`}>
            <BackButton />

            <PartnerForm />

            <Bottom />
        </div>
    );
};

export default Registration;