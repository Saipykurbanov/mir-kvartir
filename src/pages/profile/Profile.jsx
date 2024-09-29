import React from 'react';
import './css/profile.css';
import Clients from './components/Clients';
import User from './components/User';
import Ofer from './components/Ofer';
import ProfileHeader from './components/ProfileHeader';
import MobileHeader from './components/MobileHeader';


const Profile = () => {

    return (
        <div className='profile'>

            <MobileHeader />

            <ProfileHeader />

            <Clients />

            <Ofer />

        </div>
    );
};

export default Profile;