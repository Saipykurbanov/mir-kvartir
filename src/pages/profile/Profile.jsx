import React from 'react';
import './css/profile.css';
import Clients from './components/Clients';
import User from './components/User';
import Ofer from './components/Ofer';
import ProfileHeader from './components/ProfileHeader';


const Profile = () => {
    return (
        <div className='profile'>

            <ProfileHeader />

            <div className="profile_container">

                <Clients />

            </div>

            <Ofer />
        </div>
    );
};

export default Profile;